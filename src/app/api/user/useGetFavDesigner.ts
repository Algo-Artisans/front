import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface GetFavDesignerProps {
  //TO DO: 추후 추가되는 내용 보고 확정짓기
  portfolioId: number;
}

const getFavDesigner = (): Promise<ApiResponse<GetFavDesignerProps>> => {
  return axiosRequest('get', `/api/v1/like/hairstylists`);
};

export const useGetPortfolio = (): UseQueryResult<
  GetFavDesignerProps,
  AxiosError
> => {
  return useQuery({
    queryKey: ['get-favorite-designer'],
    queryFn: () => getFavDesigner(),
    select: (data) => data.data,
  });
};
