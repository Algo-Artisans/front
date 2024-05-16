import { axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const postProfileFile = (file: FormData): Promise<string> => {
  return axiosRequest('post', `/file/upload/profile`, file, {
    'Content-Type': 'multipart/form-data',
  });
};

export const usePostProfile = (): UseMutationResult<
  string,
  AxiosError,
  FormData,
  string
> => {
  return useMutation({
    mutationKey: ['post-profile-file'],
    mutationFn: (file: FormData) => postProfileFile(file),
    // mypage 유저 정보 갱신
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['get-'] });
    // },
  });
};
