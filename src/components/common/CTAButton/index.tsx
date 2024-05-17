import Button from '../Button';

import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

type CTAButtonSizeType = 'small' | 'medium' | 'large';

interface CTAButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size: CTAButtonSizeType;
  disabled: boolean;
}

const CTAButtonStyleAttribute = {
  small: 'w-[74px] h-[29px] caption-12 disabled:bg-grey-300 bg-primary-300',
  medium: 'w-[168px] h-[56px] caption-16',
  large: 'w-[301px] h-[56px] caption-16',
};

export default function CTAButton({
  size,
  children,
  className,
  disabled,
  ...props
}: CTAButtonProps) {
  const CTAButtonStyles = CTAButtonStyleAttribute[size];

  return (
    <Button
      className={cn('shadow-button', CTAButtonStyles, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
}
