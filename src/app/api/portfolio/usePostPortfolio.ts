import { ApiResponse, axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface PostPortfolio {
  hairName1: string;
  hairName2: string;
  hairName3: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  introduction: string;
  isAdvertise: boolean;
  likesCount: number;
  name: string;
  phoneNumber: string;
  portfolioId: number;
  profileURL: string;
  snsAddress: string;
}

const postPortfolio = (): Promise<ApiResponse<PostPortfolio>> => {
  return axiosRequest('post', `/myPortfolio`);
};

export const usePostPortfolio = (): UseMutationResult<
  ApiResponse<PostPortfolio>,
  AxiosError
> => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ['post-portfolio'],
    mutationFn: postPortfolio,
    onSuccess: () => {
      push('/');
    },
  });
};
