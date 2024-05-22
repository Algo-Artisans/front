import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
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
        'h-fit w-fit px-[6px] py-[6px] flex items-center justify-center rounded-[15px] bg-primary-300 text-secondary-900 caption-12',
        className,
      )}
    >
      {hashTagTrue && '#'} {styleKeyword}
    </div>
  );
}
