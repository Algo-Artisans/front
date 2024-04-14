import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface MyPortfolioProps {
  cost1: string;
  cost2: string;
  cost3: string;
  cost4: string;
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
  styling1: string;
  styling2: string;
  styling3: string;
  styling4: string;
  workplace: string;
}

const getMyPortfolio = (
  portfolioId: number,
): Promise<ApiResponse<MyPortfolioProps>> => {
  return axiosRequest('get', `/api/v1/myPortfolio?portfoliId=${portfolioId}`);
};

const useGetMyPortfolio = (
  portfolioId: number,
): UseQueryResult<MyPortfolioProps, AxiosError> => {
  return useQuery({
    queryKey: ['get-my-portfolio', portfolioId],
    queryFn: () => getMyPortfolio(portfolioId),
  });
};

export default useGetMyPortfolio;
