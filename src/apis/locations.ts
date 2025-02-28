import client from "./client-config";
import { LocationInfo } from "@/lib/types/locations";

export async function getLocationsInfo(): Promise<LocationInfo[]> {
  const url = `/locations/`;
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function putLocationsInfo(body: LocationInfo[]) {
  const url = `/locations/`;
  try {
    const response = await client.put(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
