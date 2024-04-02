import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  //TODO: props명 추후 수정하기
  styleKeyword: string;
  hashTagTrue: boolean;
}

export default function Tag({
  styleKeyword,
  hashTagTrue,
  className,
}: TagProps) {
  return (
    <div
      className={cn(
        'h-[27px] w-fit px-[6px] py-[8px] flex items-center justify-center rounded-[15px] bg-primary-300 text-secondary-900 caption-12',
        className,
      )}
    >
      {hashTagTrue && '#'} {styleKeyword}
    </div>
  );
}
