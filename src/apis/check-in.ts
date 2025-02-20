import client from "./client-config";
import { CheckInFormInputs, GetCheckInsParams } from "@/lib/types/check-in";

export async function postCheckIn(body: CheckInFormInputs) {
  const url = `/check-in/`;
  try {
    const response = await client.post(url, body);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getCheckIns(params: GetCheckInsParams) {
  const url = `/check-in/?size=${params.size}&page=${params.page}`;
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCheckIn(id: number) {
  const url = `/check-in/${id}/`;
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
