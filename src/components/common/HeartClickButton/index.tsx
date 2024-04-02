import SmallHeartButton from '../../../../public/assets/icons/heart_small_20.svg';
import LargeHeartButton from '../../../../public/assets/icons/heart_large_28.svg';

import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type HeartType = 'small' | 'large';

interface HeartClickButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: HeartType;
}

export default function HeartClickButton({
  type,
  ...restProps
}: HeartClickButtonProps) {
  return (
    <button className={cn()} {...restProps}>
      {type === 'small' ? <SmallHeartButton /> : <LargeHeartButton />}
    </button>
  );
}
