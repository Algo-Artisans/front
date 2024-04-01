import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface DropDownHeaderProps {
  DropDownTitle: string;
  className?: ReactNode;
}

export default function DropDownHeader({
  DropDownTitle,
  className,
}: DropDownHeaderProps) {
  return (
    <p className={cn('text-caption-16 text-black', className)}>
      {DropDownTitle}
    </p>
  );
}
