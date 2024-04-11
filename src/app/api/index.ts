import Cookie from 'js-cookie';
import axios, { Method } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

export interface ApiMeta {
  code: number;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  meta: ApiMeta | null;
  error?: {
    code: number;
    detail: string;
    title: string;
    status: number;
  };
}

axios.interceptors.request.use(
  function (config) {
    //NOTE : 로그인 후 헤더에 Authorization 필요 시 토큰 담기
    const accessToken = Cookie.get('accessToken');

    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 401 에러 시 처리
    if (error.response && error.response.status === 401) {
      Cookie.remove('accessToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export const axiosRequest = async <T>(
  method: Method,
  url: string,
  data?: FormData | File | Blob | ArrayBuffer | Record<string, unknown>,
  headers?: Record<string, string>,
  params?: Record<string, unknown>,
): Promise<T> => {
  const response = await instance.request<T>({
    method,
    url,
    data,
    headers,
    params,
  });
  return response.data;
};

export default instance;
