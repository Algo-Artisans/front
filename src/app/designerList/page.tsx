'use client';

import FilterIcon from '../../../public/assets/icons/filter_12.svg';
import { useGetDropDown } from '../api/portfolio/useGetDropDown';
import { usePostAi } from '../api/ai/usePostAi';
import { useGetUserInfo } from '../api/user/useGetUserInfo';
import { useGetAllPortfolio } from '../api/portfolio/useGetAllPortfolio';

import Cookie from 'js-cookie';
import Button from '@/components/common/Button';
import DesignerCard from '@/components/designerList/DesignerCard';
import { useSearchParams } from 'next/navigation';
import FilterModal from '@/components/designerList/FilterModal';
import { useEffect, useState } from 'react';
import BottomNavigation from '@/components/common/BottomNavigation';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevSelectedStyles, setPrevSelectedStyles] = useState('');
  const [dropdown, setDropdown] = useState('최신순');
  const postAiMutation = usePostAi();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (selectedStyles: string, dropdownValue: string) => {
    setIsModalOpen(false);
    if (selectedStyles !== prevSelectedStyles) {
      setPrevSelectedStyles(selectedStyles);
    }
    if (dropdownValue !== dropdown) {
      setDropdown(dropdownValue);
    }
  };

  const searchParams = useSearchParams();
  //NOTE: AI 서버로 정보 넘기는 부분
  const { data: userInfo } = useGetUserInfo();
  const token = Cookie.get('accessToken');
  const kakao_id = userInfo?.kakaoId;
  useEffect(() => {
    if (token && kakao_id) {
      postAiMutation.mutate({
        token: token,
        kakao_id: kakao_id,
      });
    }
  }, [token, kakao_id]);

  useEffect(() => {
    const hairStyle1 = searchParams.get('hairStyle1') || '';
    const hairStyle2 = searchParams.get('hairStyle2') || '';
    const hairStyle3 = searchParams.get('hairStyle3') || '';
    const prevSelectedStyles = `${hairStyle1},${hairStyle2},${hairStyle3}`;
    setPrevSelectedStyles(prevSelectedStyles);

    const dropdown = searchParams.get('dropdown') || '';
    if (dropdown !== '') {
      setDropdown(dropdown);
    }
  }, []);

  const { data: searchResults, refetch } =
    prevSelectedStyles === ',,' || prevSelectedStyles === ''
      ? useGetAllPortfolio()
      : useGetDropDown(prevSelectedStyles, dropdown);

  useEffect(
    function refetchSearchResults() {
      if (prevSelectedStyles !== '' && dropdown !== '') {
        refetch();
      }
    },
    [prevSelectedStyles, dropdown, refetch],
  );

  return (
    <>
      <div className="pt-[36px] pb-[70px] px-[20px] h-full bg-secondary-700">
        <Button
          className="w-[57px] h-[32px] caption-12 rounded-[5px] text-secondary-900 bg-white px-[9px] py-[5px]"
          onClick={handleOpenModal}
        >
          <p className="flex self-center">필터</p> <FilterIcon />
        </Button>
        <div className="w-full h-full flex flex-col gap-[15px] mt-[15px]">
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((portfolio, index) => (
              <div key={index} className="flex flex-col">
                <DesignerCard
                  key={index}
                  designerName={portfolio.name}
                  profileImageUrl={portfolio.profileURL}
                  workPlace={portfolio.workplace}
                  hairName1={portfolio.hairName1}
                  hairName2={portfolio.hairName2}
                  hairName3={portfolio.hairName3}
                  imageUrl1={portfolio.imageUrl1}
                  imageUrl2={portfolio.imageUrl2}
                  imageUrl3={portfolio.imageUrl3}
                  imageUrl4={portfolio.imageUrl4}
                  portfolioId={portfolio.portfolioId}
                  likesCount={portfolio.likesCount}
                />
              </div>
            ))
          ) : (
            <p className="pt-[30px] subtitle-20 text-white text-center">
              추천순 기능은 아직 개발중이에요! <br />
              다른 옵션을 선택해주세요👀
            </p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <FilterModal
          onClose={handleCloseModal}
          selectedStyles={prevSelectedStyles}
          isOpen={isModalOpen}
          selectedDropdown={dropdown}
        />
      )}
      <BottomNavigation />
    </>
  );
}
