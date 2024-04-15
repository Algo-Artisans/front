'use client';

import useGetMyPortfolio from '../../api/portfolio/useGetMyPortfolio';

import Tag from '@/components/common/Tag';
import BottomNavigation from '@/components/common/BottomNavigation';
import DesignerProfile from '@/components/designerDetail/DesignerProfile';
import { usePathname } from 'next/navigation';
import ImageContainer from '@/components/common/Image';
import ShowPriceList from '@/components/designerDetail/ShowPriceList';

export default function Page() {
  const currentPath = usePathname();
  const portfolioId = Number(currentPath.split('/').pop());
  const { data: designerPortfolio } = useGetMyPortfolio(portfolioId);

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
            />
            <div className="flex gap-x-[10px] mt-[8px] mb-[30px]">
              <Tag
                styleKeyword={designerPortfolio?.hairName1}
                hashTagTrue={false}
                className="shadow-tag caption-14"
              >
                {designerPortfolio.hairName1}
              </Tag>
              <Tag
                styleKeyword={designerPortfolio.hairName2}
                hashTagTrue={false}
                className="shadow-tag caption-14"
              >
                {designerPortfolio.hairName2}
              </Tag>
              <Tag
                styleKeyword={designerPortfolio.hairName3}
                hashTagTrue={false}
                className="shadow-tag caption-14"
              >
                {designerPortfolio.hairName3}
              </Tag>
            </div>
            <div className="flex flex-col gap-y-[20px]">
              <p className="text-white caption-16">
                {designerPortfolio.name} 디자이너의 스타일
              </p>
              <div className="flex flex-wrap justify-around gap-x-2 gap-y-4">
                <ImageContainer
                  type={'large'}
                  src={designerPortfolio.imageUrl1}
                  alt={designerPortfolio.imageUrl1}
                />
                <ImageContainer
                  type={'large'}
                  src={designerPortfolio.imageUrl2}
                  alt={designerPortfolio.imageUrl2}
                />
                <ImageContainer
                  type={'large'}
                  src={designerPortfolio.imageUrl3}
                  alt={designerPortfolio.imageUrl3}
                />
                <ImageContainer
                  type={'large'}
                  src={designerPortfolio.imageUrl4}
                  alt={designerPortfolio.imageUrl4}
                />
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
