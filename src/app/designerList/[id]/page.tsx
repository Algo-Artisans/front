'use client';

import useGetMyPortfolio from '../../api/portfolio/useGetMyPortfolio';

import Tag from '@/components/common/Tag';
import BottomNavigation from '@/components/common/BottomNavigation';
import DesignerProfile from '@/components/designerDetail/DesignerProfile';
import { usePathname } from 'next/navigation';
import ImageContainer from '@/components/common/Image';
import ShowPriceList from '@/components/designerDetail/ShowPriceList';
import { usePostLike } from '@/app/api/user/usePostLike';
import { useEffect, useState } from 'react';

export default function Page() {
  const currentPath = usePathname();
  const portfolioId = Number(currentPath.split('/').pop());
  const { data: designerPortfolio } = useGetMyPortfolio(portfolioId);

  const [isLiked, setIsLiked] = useState(false);
  const postLikeDesigner = usePostLike();

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    if (isLiked) {
      postLikeDesigner.mutate(portfolioId); // 포트폴리오 ID를 mutate 함수에 전달
    }
  }, [isLiked]);

  const hairNames = [
    { keyword: designerPortfolio?.hairName1 },
    { keyword: designerPortfolio?.hairName2 },
    { keyword: designerPortfolio?.hairName3 },
  ];

  const imageUrls = [
    designerPortfolio?.imageUrl1,
    designerPortfolio?.imageUrl2,
    designerPortfolio?.imageUrl3,
    designerPortfolio?.imageUrl4,
  ];

  return (
    <>
      <div className="px-[20px] pt-[50px] pb-[90px] h-full">
        {designerPortfolio && (
          <>
            <DesignerProfile
              cost1={designerPortfolio?.cost1}
              cost2={designerPortfolio.cost2}
              cost3={designerPortfolio.cost3}
              cost4={designerPortfolio.cost4}
              hairName1={designerPortfolio.hairName1}
              hairName2={designerPortfolio.hairName2}
              hairName3={designerPortfolio.hairName3}
              imageUrl1={designerPortfolio.imageUrl1}
              imageUrl2={designerPortfolio.imageUrl2}
              imageUrl3={designerPortfolio.imageUrl3}
              imageUrl4={designerPortfolio.imageUrl4}
              introduction={designerPortfolio.introduction}
              isAdvertise={designerPortfolio.isAdvertise}
              likesCount={designerPortfolio.likesCount}
              name={designerPortfolio.name}
              phoneNumber={designerPortfolio.phoneNumber}
              portfolioId={designerPortfolio.portfolioId}
              snsAddress={designerPortfolio.snsAddress}
              styling1={designerPortfolio.styling1}
              styling2={designerPortfolio.styling2}
              styling3={designerPortfolio.styling3}
              styling4={designerPortfolio.styling4}
              workplace={designerPortfolio.workplace}
              profileImgUrl={designerPortfolio.profileURL}
              handleHeartClick={handleHeartClick}
            />
            <div className="flex gap-x-[10px] mt-[8px] mb-[30px]">
              {hairNames.map((hair, index) => (
                <Tag
                  key={index}
                  styleKeyword={hair.keyword || ''}
                  hashTagTrue={false}
                  className="shadow-tag caption-14"
                >
                  {hair.keyword}
                </Tag>
              ))}
            </div>

            <div className="flex flex-col gap-y-[20px]">
              <p className="text-white caption-16">
                {designerPortfolio.name} 디자이너의 스타일
              </p>
              <div className="flex flex-wrap justify-around gap-x-2 gap-y-4">
                {imageUrls.map(
                  (url, index) =>
                    url && (
                      <ImageContainer
                        key={index}
                        type={'large'}
                        src={url}
                        alt={url}
                      />
                    ),
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-[20px] mt-[30px]">
              <p className="text-white caption-16">가격표</p>
              <ShowPriceList
                style1={designerPortfolio.styling1}
                style2={designerPortfolio.styling2}
                style3={designerPortfolio.styling3}
                style4={designerPortfolio.styling4}
                cost1={designerPortfolio.cost1}
                cost2={designerPortfolio.cost2}
                cost3={designerPortfolio.cost3}
                cost4={designerPortfolio.cost4}
              />
            </div>
          </>
        )}
      </div>
      <BottomNavigation />
    </>
  );
}
