import { useState, useEffect } from "react";
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
