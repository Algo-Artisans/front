import { ApiResponse, axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface PostUserInfo {
  nickname: string;
  gender: string;
}

const postUserInfo = (
  userInfo: PostUserInfo,
): Promise<ApiResponse<PostUserInfo>> => {
  const { gender, nickname } = userInfo;
  return axiosRequest('post', `/api/v1/nicknameGender`, { nickname, gender });
};

export const usePostUserInfo = (): UseMutationResult<
  ApiResponse<PostUserInfo>,
  AxiosError,
  PostUserInfo
> => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ['post-userInfo'],
    mutationFn: ({ gender, nickname }) => postUserInfo({ gender, nickname }),
    onSuccess: () => {
      push('/onboarding');
    },
  });
};
