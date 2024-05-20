import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

interface postAiProps {
  token: string;
  kakao_id: string;
}

const postAi = async ({ token, kakao_id }: postAiProps): Promise<string[]> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_AI_API_URL}/api/receivekakaoid`,
      {
        token,
        kakao_id,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error('요청을 처리하는 중 오류가 발생했습니다.');
  }
};

export const usePostAi = (): UseMutationResult<
  string[],
  AxiosError,
  postAiProps
> => {
  return useMutation({
    mutationKey: ['post-ai'],
    mutationFn: postAi,
  });
};
