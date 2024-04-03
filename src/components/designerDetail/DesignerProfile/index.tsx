import InstagramIcon from '../../../../public/assets/icons/instagram_15.svg';
import PhoneIcon from '../../../../public/assets/icons/phone_15.svg';
import LocationIcon from '../../../../public/assets/icons/location_16.svg';

import { HTMLAttributes, MouseEventHandler } from 'react';
import ImageContainer from '@/components/common/Image';
import HeartClickButton from '@/components/common/HeartClickButton';

interface DesignerProfileProps extends HTMLAttributes<HTMLDivElement> {
  profileUrl: string;
  workPlace: string;
  introduction: string;
  likesCount: number;
  snsAddress: string;
  designerName: string;
  phoneNumber: string;
  handleHeartClick: MouseEventHandler<HTMLButtonElement>;
}

export default function DesignerProfile({
  profileUrl,
  workPlace,
  introduction,
  likesCount,
  snsAddress,
  designerName,
  phoneNumber,
  handleHeartClick,
}: DesignerProfileProps) {
  return (
    <div className="flex flex-col bg-secondary-900 px-[20px] py-[9px] gap-y-[10px]">
      <div className="flex items-center justify-between">
        <ImageContainer type={'rLarge'} src={profileUrl} alt={designerName} />
        <div className="flex flex-col gap-y-[9px]">
          <p className="subtitle-20 text-white">디자이너 {designerName}</p>
          <p className="caption-14 text-grey-300 flex items-center">
            <LocationIcon /> {workPlace}
          </p>
          <div className="caption-10 text-white flex gap-x-[10px]">
            <div className="flex items-center gap-x-[5px]">
              <PhoneIcon /> {phoneNumber}
            </div>
            <div className="flex items-center gap-x-[5px]">
              <InstagramIcon /> @{snsAddress}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[4px]">
          <HeartClickButton type={'large'} onClick={handleHeartClick} />
          <span className="text-white caption-13">{likesCount}</span>
        </div>
      </div>
      <div className="bg-secondary-700 rounded-r-[5px] py-[14px] px-[10px] border-l-[3px] border-grey-300">
        <p className="caption-14 text-grey-300">{introduction}</p>
      </div>
    </div>
  );
}
