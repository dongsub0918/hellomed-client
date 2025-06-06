import client from "@/apis/client-config";
import { CarouselItem, CarouselFormData } from "@/lib/types/carousel";

export async function getCarouselItems(): Promise<CarouselItem[]> {
  const url = "/carousel/";
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch carousel items:", error);
    throw error;
  }
}

export async function putCarouselItems(data: CarouselFormData): Promise<void> {
  const url = "/carousel/";
  try {
    await client.put(url, data);
  } catch (error) {
    console.error("Failed to update carousel items:", error);
    throw error;
  }
}
