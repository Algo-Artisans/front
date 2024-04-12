import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface SearchPortfolioProps {
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

const getSearchPortfolio = (
  hairStyle: string,
): Promise<ApiResponse<SearchPortfolioProps>> => {
  return axiosRequest('get', `/api/v1/hairStyle/portfolios/${hairStyle}`);
};

export const usegetSearchPortfolio = (
  hairStyle: string,
): UseQueryResult<SearchPortfolioProps, AxiosError> => {
  return useQuery({
    queryKey: ['get-search-porfolio', hairStyle],
    queryFn: () => getSearchPortfolio(hairStyle),
    select: (data) => data.data,
  });
};
