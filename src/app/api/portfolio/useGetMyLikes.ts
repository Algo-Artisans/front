import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface GetLikesProps {
  totalLikes: number;
}

const getMyLikes = (): Promise<ApiResponse<GetLikesProps>> => {
  return axiosRequest('get', `/portfolios`);
};

export const useGetMyLikes = (): UseQueryResult<GetLikesProps, AxiosError> => {
  return useQuery({
    queryKey: ['get-my-likes'],
    queryFn: () => getMyLikes(),
    select: (data) => data.data,
  });
};
