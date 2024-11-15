import client from "./client-config";
import { CheckInFormInputs } from "@/lib/types";

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
