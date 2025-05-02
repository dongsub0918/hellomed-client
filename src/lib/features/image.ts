import { postPresignedURL, getPresignedURL, putImageToS3 } from "@/apis/images";

export async function uploadImageToS3(
  file: File,
  fileKey: string,
  publicUpload: boolean = false
) {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT) {
    fileKey = `test/${fileKey}`;
  }

  // get post-presigned url
  let fileType = file.type;
  const postRes = await postPresignedURL({ fileKey, fileType, publicUpload });

  // put image to s3 using post-presigned url
  await putImageToS3(postRes, file);
}

export async function getImageFromS3(fileKey: string) {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT) {
    fileKey = `test/${fileKey}`;
  }

  // get get-presigned url
  return await getPresignedURL(fileKey);
}
