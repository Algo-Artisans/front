import LeftArrowIcon from '../../../../public/assets/icons/arrow_right_6.svg';

import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export default function MypageLandingButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'w-full h-[52px] flex items-center justify-center gap-x-[5px] bg-white rounded-[5px] shadow-button',
        className,
      )}
      {...props}
    >
      <div className="w-3/4 flex justify-around items-center gap-x-[15px]">
        {children}
      </div>
      <div className="flex justify-center w-1/4">
        <LeftArrowIcon />
      </div>
    </button>
  );
}
