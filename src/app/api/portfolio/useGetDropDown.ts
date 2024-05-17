import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface AllPortfolioProps {
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

const getDropDown = (
  input: string,
  dropdown: string,
): Promise<ApiResponse<AllPortfolioProps>> => {
  return axiosRequest(
    'get',
    `/api/v1/dropdown/portfolios?dropdown=${dropdown}&input=${input}`,
  );
};

export const useGetDropDown = (
  input: string,
  dropdown: string,
): UseQueryResult<AllPortfolioProps[], AxiosError> => {
  return useQuery({
    queryKey: ['get-dropdown-porfolio'],
    queryFn: () => getDropDown(input, dropdown),
    enabled: input !== '' && dropdown !== '',
  });
};
