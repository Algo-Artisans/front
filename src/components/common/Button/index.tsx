import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export default function Button({
  children,
  type = 'button',
  className,
  disabled,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'p-[16px] w-[200px] rounded-[24px] flex items-center justify-center gap-[6px] text-secondary-900',
        disabled ? 'bg-grey-300' : 'bg-primary-500',
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
