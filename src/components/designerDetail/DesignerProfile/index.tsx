import InstagramIcon from '../../../../public/assets/icons/instagram_15.svg';
import PhoneIcon from '../../../../public/assets/icons/phone_15.svg';
import LocationIcon from '../../../../public/assets/icons/location_16.svg';

import { HTMLAttributes, MouseEventHandler } from 'react';
import ImageContainer from '@/components/common/Image';
import HeartClickButton from '@/components/common/HeartClickButton';

interface DesignerProfileProps extends HTMLAttributes<HTMLDivElement> {
  cost1: string;
  cost2: string;
  cost3: string;
  cost4: string;
  hairName1: string;
  hairName2: string;
  hairName3: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  introduction: string;
  isAdvertise: boolean;
  likesCount: number;
  name: string;
  phoneNumber: string;
  portfolioId: number;
  snsAddress: string;
  styling1: string;
  styling2: string;
  styling3: string;
  styling4: string;
  workplace: string;
  profileImgUrl: string;
  handleHeartClick: MouseEventHandler<HTMLButtonElement>;
}

export default function DesignerProfile({
  workplace,
  introduction,
  likesCount,
  name,
  phoneNumber,
  profileImgUrl,
  snsAddress,
  handleHeartClick,
}: DesignerProfileProps) {
  return (
    <div className="flex flex-col bg-secondary-900 py-[9px] gap-y-[10px]">
      <div className="flex items-center justify-between">
        <ImageContainer type={'rLarge'} src={profileImgUrl} alt={name} />
        <div className="flex flex-col gap-y-[9px]">
          <p className="subtitle-20 text-white">디자이너 {name}</p>
          <p className="caption-14 text-grey-300 flex items-center">
            <LocationIcon /> {workplace}
          </p>
          <div className="caption-10 text-white flex gap-x-[10px]">
            <div className="flex items-center gap-x-[5px]">
              <PhoneIcon /> {phoneNumber}
            </div>
            <div className="flex items-center gap-x-[5px]">
              <InstagramIcon /> {snsAddress}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[4px]">
          <HeartClickButton onClick={handleHeartClick} type={'large'} />
          <span className="text-white caption-13">{likesCount}</span>
        </div>
      </div>
      <div className="bg-secondary-700 rounded-r-[5px] py-[14px] px-[10px] border-l-[3px] border-grey-300">
        <p className="caption-14 text-grey-300">{introduction}</p>
      </div>
    </div>
  );
}
