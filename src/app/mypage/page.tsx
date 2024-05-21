'use client';

import { useGetUserInfo } from '../api/user/useGetUserInfo';
import HeartNavyIcon from '../../../public/assets/icons/heart_navy_20.svg';
import { useGetMyLikes } from '../api/portfolio/useGetMyLikes';

import MypageLandingButton from '@/components/myPage/MypageLandingButton';
import ImageContainer from '@/components/common/Image';
import Image from 'next/image';
import BottomNavigation from '@/components/common/BottomNavigation';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const { data: userInfo } = useGetUserInfo();
  const { data: designerLikesInfo } = useGetMyLikes();
  const { push } = useRouter();

  const searchParams = useSearchParams();
  const myPortfolioId = searchParams.get('portfolioId');
  const handleClickToMyPortfolio = () => {
    push(`/designerList/${myPortfolioId}`);
  };
  const handleClickToCreatePortfolio = () => {
    push(`/portfolioUpload`);
  };

  return (
    <div className="w-full h-full items-center justify-center items-center px-[16px]">
      <div className="w-full h-[105px] flex items-center gap-x-[15px] mb-[55px]">
        {userInfo && userInfo.picture ? (
          <ImageContainer
            type={'rLarge'}
            src={userInfo.picture}
            alt={'프로필 사진'}
          />
        ) : (
          <div className="w-[104px] h-[104px] rounded-full bg-grey-300"></div>
        )}
        {userInfo?.nickname && (
          <p className="subtitle-22 text-grey-900">{userInfo.nickname}님</p>
        )}
      </div>
      {userInfo && userInfo.role === 'DESIGNER' && (
        <div className="w-full h-full flex flex-col gap-y-[25px]">
          <div className="w-full h-[175px] flex flex-col gap-[15px]">
            <p className="subtitle-20">오늘 나의 좋아요 수</p>
            <div className="flex justify-center gap-x-10 items-center">
              <Image
                src={'/assets/image/likes_count_total.png'}
                alt={'좋아요 그림'}
                width={118}
                height={118}
              />
              <p className="title-40">{designerLikesInfo?.totalLikes}개</p>
            </div>
          </div>
          <MypageLandingButton onClick={handleClickToCreatePortfolio}>
            <HeartNavyIcon />내 포트폴리오 생성하기
          </MypageLandingButton>
          <MypageLandingButton onClick={handleClickToMyPortfolio}>
            <HeartNavyIcon />내 포트폴리오 보러가기
          </MypageLandingButton>
        </div>
      )}
      {userInfo && userInfo.role === 'GUEST' && (
        <MypageLandingButton>
          <HeartNavyIcon />
          좋아요한 디자이너 보기
        </MypageLandingButton>
      )}
      <BottomNavigation />
    </div>
  );
}
