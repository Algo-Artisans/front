import { ApiResponse, axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface PostLikeProps {
  portfolioId: number;
}

const postLike = (portfolioId: string): Promise<ApiResponse<PostLikeProps>> => {
  return axiosRequest('post', `/like/hairstylist/portfolioId=${portfolioId}`);
};

export const usePostLike = (): UseMutationResult<
  ApiResponse<PostLikeProps>,
  AxiosError,
  string
> => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ['post-fav-designer'],
    mutationFn: postLike,
    onSuccess: () => {
      push('/');
    },
  });
};
