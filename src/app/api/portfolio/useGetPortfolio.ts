import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface GetPortfolioProps {
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

const getPortfolio = (): Promise<ApiResponse<GetPortfolioProps>> => {
  return axiosRequest('get', `/portfolios`);
};

export const useGetPortfolio = (): UseQueryResult<
  GetPortfolioProps,
  AxiosError
> => {
  return useQuery({
    queryKey: ['get-porfolio'],
    queryFn: () => getPortfolio(),
    select: (data) => data.data,
  });
};
