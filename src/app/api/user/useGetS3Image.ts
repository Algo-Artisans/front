import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface S3ImageProps {
  url: string;
}

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_KEY_ID || '',
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY || '',
  },
});

const getS3Image = async (objectKey: string): Promise<S3ImageProps> => {
  try {
    // GetObjectCommand를 사용하여 S3 객체 가져오기
    const command = new GetObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
      Key: objectKey,
    });
    const response = await s3Client.send(command);
    let imageUrl: string | undefined;

    if (response.Body) {
      const str = await response.Body.transformToByteArray();
      const blob = new Blob([str], { type: 'image/png' });

      imageUrl = URL.createObjectURL(blob);
    }

    // 이미지 URL 반환
    return { url: imageUrl || '' };
  } catch (error) {
    console.error('S3 이미지 가져오기 실패:', error);
    throw error;
  }
};

const useGetS3Image = (
  bucketName: string,
): UseQueryResult<S3ImageProps, AxiosError> => {
  return useQuery({
    queryKey: ['get-s3-image', bucketName],
    queryFn: () => getS3Image(bucketName),
  });
};

export default useGetS3Image;
