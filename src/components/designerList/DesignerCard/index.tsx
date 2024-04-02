import SmallRoundedImage from '../../../../public/assets/icons/image_rSmall_50.svg';
import SmallRectangleImage from '../../../../public/assets/icons/rectangle_small_81.svg';

import HeartClickButton from '@/components/common/HeartClickButton';
import ImageContainer from '@/components/common/Image';
import Tag from '@/components/common/Tag';
import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

interface DesignerCardProps extends HTMLAttributes<HTMLDivElement> {
  designerName: string;
  designerProfile: string;
  workPlace: string;
  hairStyle: string;
  portfolioPicture: string;
}

export default function DesignerCard({
  designerName,
  designerProfile,
  workPlace,
  hairStyle,
  portfolioPicture,
}: DesignerCardProps) {
  return (
    <div className={cn('flex justify-center px-[20px] w-full mt-[100px]')}>
      <div
        className={cn(
          'relative flex flex-col justify-center gap-[8px] h-[175px] w-full bg-white rounded-[10px] px-[16px] py-[18px]',
        )}
      >
        <div className="flex justify-between items-center gap-[15px]">
          {designerProfile != 'null' ? (
            <ImageContainer
              type={'rSmall'}
              src={designerProfile}
              alt={designerProfile}
            />
          ) : (
            <SmallRoundedImage />
          )}
          <div className="flex flex-col justify-center grow gap-[8px]">
            <p className="flex caption-14 items-center text-black text-center gap-[6px]">
              <span>디자이너 {designerName}</span>
              <span className="caption-12 text-grey-500">| {workPlace}</span>
            </p>
            <Tag styleKeyword={hairStyle} hashTagTrue={true}>
              {hairStyle}
            </Tag>
          </div>
          <HeartClickButton
            type={'small'}
            className="absolute top-[15px] right-[10px]"
          />
        </div>
        <div className="flex gap-[3px]">
          {portfolioPicture != 'null' ? (
            <ImageContainer
              type={'small'}
              src={portfolioPicture}
              alt={portfolioPicture}
            />
          ) : (
            <SmallRectangleImage />
          )}
        </div>
      </div>
      ;
    </div>
  );
}
