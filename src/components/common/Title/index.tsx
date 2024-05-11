import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode } from 'react';

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <p className={cn('subtitle-22 text-white text-left', className)}>
      {children}
    </p>
  );
}
