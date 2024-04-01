import { cn } from '@/utils/cn';
import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export default function InputField({
  className,
  title,
  ...restProps
}: InputFieldProps) {
  return (
    <div className={cn('flex flex-col gap-[10px]')}>
      <p className={cn('caption-16 text-black')}>{title}</p>
      <input
        {...restProps}
        className={cn(
          'border-[1px] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 rounded-[6px] w-full h-[44px] px-[10px] border-grey-300 placeholder:gray-500 focus:placeholder:text-grey-300 w-full caret-black',
          className,
        )}
      />
    </div>
  );
}
