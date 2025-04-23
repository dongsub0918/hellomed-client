import { useState, useEffect, useRef } from "react";
import { CarouselItem } from "@/lib/types/carousel";
import { getCarouselItems } from "@/apis/carousel";

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
  const [formCarousel, setFormCarousel] = useState<CarouselItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const items = await getCarouselItems();
        setFormCarousel(items);
      } catch (err) {
        console.error("Failed to fetch initial carousel items:", err);
      }
    };
    fetchInitialData();
  }, []);

  const handleItemChange = (
    index: number,
    field: keyof CarouselItem,
    value: string
  ) => {
    const updatedItems = [...formCarousel];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };
    setFormCarousel(updatedItems);
  };

  const handleSelectChange = (index: number) => {
    setSelectedIndex(index);
  };

  const addNewItem = () => {
    const newItem: CarouselItem = {
      title: "",
      description: "",
      imageSrc: "/placeholder.jpg",
      href: null,
    };
    const updatedItems = [...formCarousel, newItem];
    setFormCarousel(updatedItems);
    setSelectedIndex(updatedItems.length - 1);
  };

  const removeItem = (index: number) => {
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

  return {
    formCarousel,
    selectedIndex,
    handleItemChange,
    handleSelectChange,
    addNewItem,
    removeItem,
    moveItem,
  };
}
