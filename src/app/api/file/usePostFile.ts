import { axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const postFile = (files: FormData): Promise<string[]> => {
  return axiosRequest('post', `/file/upload`, files, {
    'Content-Type': 'multipart/form-data',
  });
};

export const usePostFile = (): UseMutationResult<
  string[],
  AxiosError,
  FormData,
  string
> => {
  return useMutation({
    mutationKey: ['post-file'],
    mutationFn: (files: FormData) => postFile(files),
    // mypage 유저 정보 갱신
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['get-'] });
    // },
  });
};
