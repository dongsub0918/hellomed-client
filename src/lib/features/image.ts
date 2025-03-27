import { postPresignedURL, getPresignedURL, putImageToS3 } from "@/apis/images";

export async function uploadImageToS3(file: File, fileKey: string) {
  // get post-presigned url
  let fileType = file.type;
  const postRes = await postPresignedURL({ fileKey, fileType });

  // put image to s3 using post-presigned url
  await putImageToS3(postRes.presignedURL, file);
}
