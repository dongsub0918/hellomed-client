import client from "./client-config";

export async function getAdmin(email: string) {
  const url = `/auth/${email}/`;
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAdmins() {
  const url = `/auth/`;
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function postAdmin(email: string) {
  const url = `/auth/${email}/`;
  try {
    const response = await client.post(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteAdmin(email: string) {
  const url = `/auth/${email}/`;
  try {
    const response = await client.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
