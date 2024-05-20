import { axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const postFiles = (files: FormData): Promise<string[]> => {
  return axiosRequest('post', `/file/upload/files`, files, {
    'Content-Type': 'multipart/form-data',
  });
};

export const usePostFiles = (): UseMutationResult<
  string[],
  AxiosError,
  FormData,
  string
> => {
  return useMutation({
    mutationKey: ['post-files'],
    mutationFn: (files: FormData) => postFiles(files),
    // mypage 유저 정보 갱신
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['get-'] });
    // },
  });
};
