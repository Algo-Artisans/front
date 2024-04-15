import { cn } from '@/utils/cn';
import { ImageProps } from 'next/image';
import Image from 'next/image';

type ImageType =
  | 'rSmall'
  | 'rLarge'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge';

interface ImageContainerProps extends ImageProps {
  type: ImageType;
}

const ImageStyleAttribute = {
  rSmall: 'w-[50px] h-[50px] rounded-full',
  rLarge: 'w-[104px] h-[104px] rounded-full',
  small: 'w-[81px] h-[91px] rounded-[5px]',
  medium: 'w-[138px] h-[150px] rounded-[10px]',
  large: 'w-[163px] h-[177px] rounded-[5px]',
  extraLarge: 'w-[244px] h-[307px]',
};

export default function ImageContainer({
  type,
  className,
  ...restProps
}: ImageContainerProps) {
  const ImageStyles = ImageStyleAttribute[type];

  return (
    <div className={cn('relative overflow-hidden', ImageStyles)}>
      <Image
        priority
        fill
        className={cn('object-cover', className)}
        {...restProps}
      />
    </div>
  );
}
