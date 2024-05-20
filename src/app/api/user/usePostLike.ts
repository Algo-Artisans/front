import { ApiResponse, axiosRequest } from '..';
import queryClient from '../queryClient';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const postLike = (portfolioId: number): Promise<ApiResponse<number>> => {
  return axiosRequest('post', `/api/v1/like/hairstylist`, { portfolioId });
};

export const usePostLike = (): UseMutationResult<
  ApiResponse<number>,
  AxiosError,
  number
> => {
  return useMutation({
    mutationKey: ['post-fav-designer'],
    mutationFn: (portfolioId) => postLike(portfolioId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-all-porfolio'],
        refetchType: 'all',
      });
      queryClient.invalidateQueries({ queryKey: ['get-my-portfolio'] });
      queryClient.invalidateQueries({
        queryKey: ['get-dropdown-porfolio'],
        refetchType: 'all',
      });
    },
  });
};
