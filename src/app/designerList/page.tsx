'use client';

import { useGetSearchPortfolio } from '../api/portfolio/useGetSearchPortfolio';
import FilterIcon from '../../../public/assets/icons/filter_12.svg';

import Button from '@/components/common/Button';
import DesignerCard from '@/components/designerList/DesignerCard';
import { useSearchParams } from 'next/navigation';
import useHandleModal from '@/hooks/useHandleModal';
import FilterModal from '@/components/designerList/FilterModal';
import { useFilterSelection } from '@/hooks/useFilterSelection';
import { useEffect } from 'react';
import BottomNavigation from '@/components/common/BottomNavigation';

export default function Page() {
  //처음에 넘겨 받은 헤어스타일들을 기반으로 서치 api & 일단 전체 디자이너 리스트 가지고는 있기
  //넘어올 때 /designerList?hairstyle1=a&&hairstyle2=b...

  const searchParams = useSearchParams();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useHandleModal();

  const {
    selectedStyles,
    permIsSelected,
    cutIsSelected,
    selectedSortIndex,
    setPermIsSelected,
    setCutIsSelected,
    setSelectedStyles,
    setSelectedSortIndex,
  } = useFilterSelection();

  const hairStyles = [
    searchParams.get('hairStyle1') || '',
    searchParams.get('hairStyle2') || '',
    searchParams.get('hairStyle3') || '',
  ];

  useEffect(() => {
    setSelectedStyles(hairStyles);
  }, []);

  const { data: searchResults } = useGetSearchPortfolio(selectedStyles);

  return (
    <>
      <div className="pt-[36px] pb-[70px] px-[20px] h-full bg-secondary-700">
        <Button
          className="w-[57px] h-[32px] caption-12 rounded-[5px] text-secondary-900 bg-white px-[9px] py-[5px]"
          onClick={handleOpenModal}
        >
          <p className="flex self-center">필터</p> <FilterIcon />
        </Button>
        <div className="pt-[30px] flex flex-col gap-[15px]">
          {searchResults &&
            searchResults.map((portfolioGroup, index) => (
              <div key={index} className="flex flex-col gap-[15px]">
                {portfolioGroup.map((portfolio, innerIndex) => (
                  <DesignerCard
                    key={innerIndex}
                    designerName={portfolio.name}
                    workPlace={portfolio.workplace}
                    hairName1={portfolio.hairName1}
                    hairName2={portfolio.hairName2}
                    hairName3={portfolio.hairName3}
                    imageUrl1={portfolio.imageUrl1}
                    imageUrl2={portfolio.imageUrl2}
                    imageUrl3={portfolio.imageUrl3}
                    imageUrl4={portfolio.imageUrl4}
                    portfolioId={portfolio.portfolioId}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
      {isModalOpen && (
        <FilterModal
          onClose={handleCloseModal}
          selectedStyles={selectedStyles}
          permIsSelected={permIsSelected}
          cutIsSelected={cutIsSelected}
          selectedSortIndex={selectedSortIndex}
          setPermIsSelected={setPermIsSelected}
          setCutIsSelected={setCutIsSelected}
          setSelectedStyles={setSelectedStyles}
          setSelectedSortIndex={setSelectedSortIndex}
        />
      )}
      <BottomNavigation />
    </>
  );
}
