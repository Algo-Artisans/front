import { ApiResponse, axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface PostPortfolioProps {
  cost1?: string;
  cost2?: string;
  cost3?: string;
  cost4?: string;
  styling1?: string;
  styling2?: string;
  styling3?: string;
  styling4?: string;
  hairName1?: string;
  hairName2?: string;
  hairName3?: string;
  introduction?: string;
  name?: string;
  phoneNumber?: string;
  portfolioId?: number;
  snsAddress?: string;
  workplace?: string;
  profileURL?: string;
  certificateUrl?: string;
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
}

const postPortfolio = ({
  ...props
}: PostPortfolioProps): Promise<ApiResponse<PostPortfolioProps>> => {
  return axiosRequest('post', `/api/v1/myPortfolio`, { ...props });
};

export const usePostPortfolio = (): UseMutationResult<
  ApiResponse<PostPortfolioProps>,
  AxiosError,
  PostPortfolioProps
> => {
  return useMutation({
    mutationKey: ['post-portfolio'],
    mutationFn: postPortfolio,
  });
};
