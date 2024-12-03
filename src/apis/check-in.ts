import client from "./client-config";
import { CheckInFormInputs, GetCheckInsParams } from "@/lib/types";

export async function postCheckIn(data: CheckInFormInputs) {
  const url = `/check-in/`;
  try {
    const response = await client.post(url, data);
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getCheckIns(params: GetCheckInsParams) {
  const url = `/check-in/?size=${params.size}&page=${params.page}`;

  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching check-ins:", error);
    throw error; // Re-throw the error for the caller to handle
  }
}

export async function getCheckIn(id: number) {
  const url = `/check-in/${id}/`;

  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching check-in:", error);
    throw error; // Re-throw the error for the caller to handle
  }
}
