import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes } from 'react';
import Button from '@/components/common/Button';

export default function FloatingActionButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      className={cn(
        'w-[45px] h-[45px] rounded-[20px] shadow-button',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
