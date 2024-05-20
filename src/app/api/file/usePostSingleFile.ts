import { axiosRequest } from '..';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface PostSingleFileProps {
  certificate: boolean;
  profile: boolean;
  file: File;
}

const postSingleFile = ({
  certificate,
  profile,
  file,
}: PostSingleFileProps): Promise<string> => {
  const formData = new FormData();
  if (certificate) {
    formData.append('certificate', file);
  }
  if (profile) {
    formData.append('profile', file);
  }
  return axiosRequest('post', `/file/upload/file`, formData, {
    'Content-Type': 'multipart/form-data',
  });
};

export const usePostSingleFile = (): UseMutationResult<
  string,
  AxiosError,
  PostSingleFileProps,
  string
> => {
  return useMutation({
    mutationKey: ['post-single-file'],
    mutationFn: (props: PostSingleFileProps) => postSingleFile(props),
  });
};
