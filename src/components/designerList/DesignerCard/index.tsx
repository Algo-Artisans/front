import SmallRoundedImage from '../../../../public/assets/icons/image_rSmall_50.svg';
import SmallRectangleImage from '../../../../public/assets/icons/rectangle_small_81.svg';

import HeartClickButton from '@/components/common/HeartClickButton';
import ImageContainer from '@/components/common/Image';
import Tag from '@/components/common/Tag';
import { showCardVariants } from '@/constants/motion';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';

interface DesignerCardProps extends HTMLAttributes<HTMLDivElement> {
  designerName: string;
  profileImageUrl: string;
  workPlace: string;
  hairName1: string;
  hairName2: string;
  hairName3: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  portfolioId: number;
  likesCount: number;
}

export default function DesignerCard({
  designerName,
  profileImageUrl,
  workPlace,
  hairName1,
  hairName2,
  hairName3,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  portfolioId,
  likesCount,
}: DesignerCardProps) {
  const { push } = useRouter();

  const handleMoveToDetail = () => {
    push(`/designerList/${portfolioId}`);
  };

  return (
    <motion.div
      variants={showCardVariants}
      animate={['animate', 'opacity']}
      initial="initial"
      exit="exit"
      className={cn('flex justify-center w-full')}
    >
      <div
        className={cn(
          'relative flex flex-col justify-center gap-[8px] h-[175px] w-full bg-white rounded-[10px] px-[16px] py-[18px]',
        )}
      >
        <div className="flex justify-between items-center gap-[10px]">
          {profileImageUrl ? (
            <ImageContainer
              type={'rSmall'}
              src={profileImageUrl}
              alt={profileImageUrl}
              quality={50}
              onClick={handleMoveToDetail}
            />
          ) : (
            <SmallRoundedImage />
          )}
          <div className="flex flex-col justify-center grow gap-[8px]">
            <p className="flex caption-14 items-center text-black text-center gap-[6px]">
              <span>디자이너 {designerName}</span>
              <span className="caption-12 text-grey-500">| {workPlace}</span>
            </p>
            <div className="flex gap-x-[5px]">
              <Tag styleKeyword={hairName1} hashTagTrue={true}>
                {hairName1}
              </Tag>
              <Tag styleKeyword={hairName2} hashTagTrue={true}>
                {hairName2}
              </Tag>
              <Tag styleKeyword={hairName3} hashTagTrue={true}>
                {hairName3}
              </Tag>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center cursor-default">
            <HeartClickButton className="cursor-default" type={'small'} />
            <p>{likesCount}</p>
          </div>
        </div>
        <div className="flex gap-[3px]">
          {imageUrl1 ? (
            <ImageContainer type={'small'} src={imageUrl1} alt={imageUrl1} />
          ) : (
            <SmallRectangleImage />
          )}
          {imageUrl2 ? (
            <ImageContainer type={'small'} src={imageUrl2} alt={imageUrl2} />
          ) : (
            <SmallRectangleImage />
          )}
          {imageUrl3 ? (
            <ImageContainer type={'small'} src={imageUrl3} alt={imageUrl3} />
          ) : (
            <SmallRectangleImage />
          )}
          {imageUrl4 ? (
            <ImageContainer type={'small'} src={imageUrl4} alt={imageUrl4} />
          ) : (
            <SmallRectangleImage />
          )}
        </div>
      </div>
      ;
    </motion.div>
  );
}
