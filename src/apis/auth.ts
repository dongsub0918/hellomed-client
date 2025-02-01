import client from "./client-config";

export async function checkAdmin(email: string) {
  const url = `/auth/${email}/`;
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
