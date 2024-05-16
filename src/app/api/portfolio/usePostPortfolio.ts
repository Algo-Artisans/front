import { ApiResponse, axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

// TODO: props 확정 후 수정하기
interface PostPortfolioProps {
  cost1: string;
  cost2: string;
  cost3: string;
  cost4: string;
  styling1: string;
  styling2: string;
  styling3: string;
  styling4: string;
  hairName1: string;
  hairName2: string;
  hairName3: string;
  introduction: string;
  name: string;
  phoneNumber: string;
  portfolioId: number;
  snsAddress: string;
}

const postPortfolio = (): Promise<ApiResponse<PostPortfolioProps>> => {
  return axiosRequest('post', `/api/v1/myPortfolio`);
};

export const usePostPortfolio = (): UseMutationResult<
  ApiResponse<PostPortfolioProps>,
  AxiosError
> => {
  // const { push } = useRouter();

  return useMutation({
    mutationKey: ['post-portfolio'],
    mutationFn: postPortfolio,
    // TODO: onSuccess 마무리
    // onSuccess: () => {

    // },
  });
};
