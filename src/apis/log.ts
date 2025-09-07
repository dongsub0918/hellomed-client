import client from "./client-config";

type LogBody = {
  type: string;
  context: string;
  message: string;
};

export async function postLog(body: LogBody) {
  const url = "/log/";
  try {
    const response = await client.post(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
