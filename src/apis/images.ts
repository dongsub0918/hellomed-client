// starting with "/images" endpoint

import client from "@/apis/client-config";

type PostPresignedURLRequestBody = {
  fileKey: string;
  fileType: string;
};

export async function postPresignedURL(
  body: PostPresignedURLRequestBody
): Promise<string | undefined> {
  const url = "/images/presigned_url/";
  try {
    const response = await client.post(url, body);

    return response?.data.presignedUrl;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getPresignedURL(
  fileKey: string
): Promise<string | undefined> {
  const url = `/images/presigned_url/?fileKey=${fileKey}`;
  try {
    const response = await client.get(url);
    return response?.data.presignedUrl;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function putImageToS3(
  presigned_url: string,
  file: File
): Promise<void> {
  try {
    await client.put(presigned_url, file, {
      headers: {
        "Content-Type": file.type,
      },
    });
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
