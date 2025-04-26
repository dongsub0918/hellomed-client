import { useState, useEffect, useRef } from "react";
import {
  CarouselItem,
  CarouselFormItem,
  CarouselFormData,
} from "@/lib/types/carousel";
import { getCarouselItems, putCarouselItems } from "@/apis/carousel";
import { uploadImageToS3 } from "@/lib/features/image";

export function useCarousel() {
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCarouselItems = async () => {
      try {
        setIsLoading(true);
        const items = await getCarouselItems();
        setCarouselItems(items);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch carousel items")
        );
        setIsLoading(false);
      }
    };

    fetchCarouselItems();
  }, []);

  return { carouselItems, isLoading, error };
}

export function useManageCarousel() {
  const [formCarousel, setFormCarousel] = useState<CarouselFormItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const tempUrls = useRef<string[]>([]);
  const keysToDelete = useRef<string[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const items = await getCarouselItems();
        // Convert CarouselItem[] to CarouselFormItem[]
        setFormCarousel(items.map((item) => ({ ...item })));
      } catch (err) {
        console.error("Failed to fetch initial carousel items:", err);
      }
    };
    fetchInitialData();

    return () => {
      tempUrls.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const handleItemChange = (
    index: number,
    field: keyof CarouselItem, // Note: using CarouselItem here as we don't want to allow changing imageFile through this method
    value: string
  ) => {
    const updatedItems = [...formCarousel];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };
    setFormCarousel(updatedItems);
  };

  const handleImagePreview = (index: number, file: File) => {
    const prevUrl = formCarousel[index]?.imageSrc;
    if (prevUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(prevUrl);
      tempUrls.current = tempUrls.current.filter((url) => url !== prevUrl);
    }

    const tempUrl = URL.createObjectURL(file);
    tempUrls.current.push(tempUrl);

    const updatedItems = [...formCarousel];
    updatedItems[index] = {
      ...updatedItems[index],
      imageSrc: tempUrl,
      imageFile: file,
    };
    setFormCarousel(updatedItems);
    console.log(updatedItems);
  };

  const handleSelectChange = (index: number) => {
    setSelectedIndex(index);
  };

  const addNewItem = () => {
    const newItem: CarouselFormItem = {
      title: "",
      description: "",
      imageSrc: "/placeholder.png",
      href: null,
    };
    const updatedItems = [...formCarousel, newItem];
    setFormCarousel(updatedItems);
    setSelectedIndex(updatedItems.length - 1);
  };

  const removeItem = (index: number) => {
    const itemToRemove = formCarousel[index];

    // If the image is from S3, add its key to the deletion list
    if (
      itemToRemove?.imageSrc?.startsWith("https://hellomed-image-public.s3")
    ) {
      const key = itemToRemove.imageSrc.split(".com/")[1];
      keysToDelete.current.push(key);
    }

    if (itemToRemove?.imageSrc?.startsWith("blob:")) {
      URL.revokeObjectURL(itemToRemove.imageSrc);
      tempUrls.current = tempUrls.current.filter(
        (url) => url !== itemToRemove.imageSrc
      );
    }

    const updatedItems = formCarousel.filter((_, i) => i !== index);
    setFormCarousel(updatedItems);
    setSelectedIndex(Math.min(index, updatedItems.length - 1));
  };

  const moveItem = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === formCarousel.length - 1)
    ) {
      return;
    }

    const newIndex = direction === "up" ? index - 1 : index + 1;
    const updatedItems = [...formCarousel];
    [updatedItems[index], updatedItems[newIndex]] = [
      updatedItems[newIndex],
      updatedItems[index],
    ];
    setFormCarousel(updatedItems);
    setSelectedIndex(newIndex);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const cleanedItems: CarouselItem[] = [];

      // Process each item in formCarousel
      for (const item of formCarousel) {
        let finalItem = { ...item };

        // If the image is a temporary one (blob URL), upload it to S3
        if (item.imageSrc.startsWith("blob:") && item.imageFile) {
          const fileKey = `carousel/${item.imageFile.name}`;
          await uploadImageToS3(item.imageFile, fileKey, true);

          // Update the imageSrc to the S3 URL, using the correct bucket based on environment
          const bucket =
            process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
              ? "https://hellomed-image-public.s3.us-east-2.amazonaws.com/hellomed-image-public/test"
              : "https://hellomed-image-public.s3.us-east-2.amazonaws.com/hellomed-image-public";
          finalItem = {
            ...finalItem,
            imageSrc: `${bucket}/${fileKey}`,
          };
        }

        // Clean the item by removing imageFile property
        const { imageFile, ...cleanItem } = finalItem;
        cleanedItems.push(cleanItem);
      }

      // Send cleaned data to API endpoint
      const formData: CarouselFormData = {
        carouselItems: cleanedItems,
        keysToDelete: keysToDelete.current,
      };
      await putCarouselItems(formData);

      // Clean up all temporary URLs and reset keysToDelete
      tempUrls.current.forEach((url) => URL.revokeObjectURL(url));
      tempUrls.current = [];
      keysToDelete.current = [];
    } catch (error) {
      console.error("Error during submission:", error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formCarousel,
    selectedIndex,
    handleItemChange,
    handleImagePreview,
    handleSelectChange,
    addNewItem,
    removeItem,
    moveItem,
    handleSubmit,
    isSubmitting,
  };
}
