'use client';

import LeftArrow from '../../../../public/assets/icons/arrow_left_30.svg';

import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface HeaderProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export default function Header({
  className,
  onClick,
  ...restProps
}: HeaderProps) {
  const { back } = useRouter();

  const handleClickBackButton = () => {
    if (onClick) {
      onClick();
    } else {
      back();
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 flex items-center px-[16px] py-[8px] w-full max-w-[480px] z-header',
        className,
      )}
      {...restProps}
    >
      <button className="w-[40px] h-[40px]" onClick={handleClickBackButton}>
        <LeftArrow />
      </button>
    </header>
  );
}
