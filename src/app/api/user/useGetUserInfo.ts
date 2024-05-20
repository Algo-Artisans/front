import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface GetUserInfoProps {
  kakaoNickname: string;
  picture: string;
  role: string;
  gender: string;
  nickname: string;
  faceShapeBest: string;
  faceShapeWorst: string;
  kakaoId: string;
}

const getUserInfo = (): Promise<ApiResponse<GetUserInfoProps>> => {
  return axiosRequest('get', `/api/v1/information`);
};

export const useGetUserInfo = (): UseQueryResult<
  GetUserInfoProps,
  AxiosError
> => {
  return useQuery({
    queryKey: ['get-user-info'],
    queryFn: () => getUserInfo(),
  });
};
