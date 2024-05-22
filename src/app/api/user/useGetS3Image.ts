import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface S3ImageProps {
  urls: string[]; // 여러 이미지 URL을 저장하는 배열
}

const getS3Image = async (objectKeys: string[]): Promise<S3ImageProps> => {
  try {
    const s3Client = new S3Client({
      region: process.env.NEXT_PUBLIC_S3_REGION,
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_KEY_ID || '',
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY || '',
      },
    });

    const images = await Promise.all(
      objectKeys.map(async (objectKey) => {
        const command = new GetObjectCommand({
          Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
          Key: objectKey,
        });
        const response = await s3Client.send(command);

        if (response.Body) {
          const str = await response.Body.transformToByteArray();
          const blob = new Blob([str], { type: 'image/png' });
          return URL.createObjectURL(blob);
        }
        return ''; // 이미지가 없는 경우 빈 문자열 반환
      }),
    );

    // 이미지 URL 배열 반환
    return { urls: images.filter((url) => url !== '') };
  } catch (error) {
    console.error('S3 이미지 가져오기 실패:', error);
    throw error;
  }
};

export const useGetS3Image = (
  objectKeys: string[],
): UseQueryResult<S3ImageProps, AxiosError> => {
  return useQuery({
    queryKey: ['get-s3-image', objectKeys], // objectKeys를 쿼리 키로 사용
    queryFn: () => getS3Image(objectKeys),
  });
};
