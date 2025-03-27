// starting with "/images" endpoint

import client from "@/apis/client-config";
import {
  PostPresignedURLRequestBody,
  PostPresignedURL,
  GetPresignedURL,
} from "@/lib/types/images";

export async function postPresignedURL(
  body: PostPresignedURLRequestBody
): Promise<PostPresignedURL | undefined> {
  const url = "/images/presigned_url/";
  try {
    const response = await client.post(url, body);

    return response?.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getPresignedURL({
  fileKey,
  fileType,
}: PostPresignedURLRequestBody): Promise<GetPresignedURL | undefined> {
  const url = `/images/presigned_url/?fileKey=${fileKey}&fileType=${fileType}`;
  try {
    const response = await client.get(url);

    return response?.data;
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
