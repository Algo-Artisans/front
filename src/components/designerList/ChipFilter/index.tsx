import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode } from 'react';

interface ChipFilterProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ChipFilter({ children, ...props }: ChipFilterProps) {
  return (
    <button
      className={cn(
        'flex justify-center items-center px-[9px] py-[5px] gap-[6px] bg-white text-secondary-900 caption-12',
      )}
      {...props}
    >
      {children}
    </button>
  );
}
