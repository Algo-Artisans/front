import { ApiResponse, axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface PostRole {
  message: string;
  isSuccess: boolean;
}

const postRole = (role: string): Promise<ApiResponse<PostRole>> => {
  return axiosRequest('post', `/select-role?role=${role}`);
};

export const usePostRole = (): UseMutationResult<
  ApiResponse<PostRole>,
  AxiosError,
  string
> => {
  return useMutation({
    mutationKey: ['post-role'],
    mutationFn: postRole,
  });
};
