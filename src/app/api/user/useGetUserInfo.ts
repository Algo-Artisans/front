import { ApiResponse, axiosRequest } from '..';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface GetUserInfoProps {
  faceShapeBest: string;
  faceShapeWorst: string;
  gender: string;
  kakaoNickname: string;
  nickname: string;
  picture: string;
  role: string;
}

const getUserInfo = (): Promise<ApiResponse<GetUserInfoProps>> => {
  return axiosRequest('get', `/information`);
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
