import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface AllPortfolioProps {
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

const getAllPortfolio = (): Promise<ApiResponse<AllPortfolioProps>> => {
  return axiosRequest('get', `/api/v1/portfolios`);
};

export const useGetAllPortfolio = (): UseQueryResult<
  AllPortfolioProps,
  AxiosError
> => {
  return useQuery({
    queryKey: ['get-all-porfolio'],
    queryFn: () => getAllPortfolio(),
    select: (data) => data.data,
  });
};
