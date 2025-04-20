import client from "@/apis/client-config";
import { CarouselItem } from "@/lib/types/carousel";

export async function getCarouselItems(): Promise<CarouselItem[]> {
  const url = "/carousel/";
  try {
    const response = await client.get(url);
    return response?.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
