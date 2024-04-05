import { ApiResponse, axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface PostUserInfo {
  nickName: string;
  gender: string;
}

const postPortfolio = (
  gender: string,
  nickName: string,
): Promise<ApiResponse<PostUserInfo>> => {
  return axiosRequest(
    'post',
    `/nicknameGender/gender=${gender}&nickname=${nickName}`,
  );
};

export const usePostPortfolio = (): UseMutationResult<
  ApiResponse<PostUserInfo>,
  AxiosError,
  { gender: string; nickName: string }
> => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ['post-userInfo'],
    mutationFn: ({ gender, nickName }) => postPortfolio(gender, nickName),
    onSuccess: () => {
      push('/');
    },
  });
};
