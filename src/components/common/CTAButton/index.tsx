import Button from '../Button';

import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

type CTAButtonSizeType = 'small' | 'medium' | 'large';

interface CTAButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size: CTAButtonSizeType;
}

const CTAButtonStyleAttribute = {
  small: 'w-[74px] h-[29px] caption-12 disabled:bg-gray-300 bg-primary-300',
  medium: 'w-[168px] h-[56px] caption-16',
  large: 'w-[301px] h-[56px] caption-14',
};

export default function CTAButton({
  size,
  children,
  className,
  ...props
}: CTAButtonProps) {
  const CTAButtonStyles = CTAButtonStyleAttribute[size];

  return (
    <Button
      className={cn('shadow-button', CTAButtonStyles, className)}
      {...props}
    >
      {children}
    </Button>
  );
}