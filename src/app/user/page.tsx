'use client';

import { useGetUserInfo } from '../api/user/useGetUserInfo';
import useGetS3Image from '../api/user/useGetS3Image';
import Home from '../../../public/assets/icons/home_35.svg';

import { useEffect, useState } from 'react';
import UserCard from '@/components/user/userCard';
import { STYLES } from '@/constants/styles';
import { useRouter, useSearchParams } from 'next/navigation';
import { FILENAMES } from '@/constants/fileNames';
import FloatingActionButton from '@/components/user/FloatingActionButton';

export default function Page() {
  const { data: userInfo } = useGetUserInfo();

  const searchParams = useSearchParams();
  //TODO: AI랑 쿼리 맞추기
  const faceShapeBest = searchParams.get('faceShapeBest');
  const faceShapeWorst = searchParams.get('faceShapeWorst');

  const [bestImageUrl, setBestImageUrl] = useState('');
  const [worstImageUrl, setWorstImageUrl] = useState('');

  useEffect(() => {
    FILENAMES.forEach((item) => {
      if (item.id === faceShapeBest) {
        setBestImageUrl(item.imageUrl);
      }
      if (item.id === faceShapeWorst) {
        setWorstImageUrl(item.imageUrl);
      }
    });
  }, [faceShapeBest, faceShapeWorst]);

  const { data: generatedBestImage } = useGetS3Image(bestImageUrl);
  const { data: generatedWorstImage } = useGetS3Image(worstImageUrl);

  const [isBest, setIsBest] = useState(true);
  const handleToggleStyle = () => {
    setIsBest((prevIsBest) => !prevIsBest);
  };

  const faceShape: string =
    STYLES.find((style) => style.id === userInfo?.faceShapeBest)?.faceShape ||
    '';

  const hairTitle: string =
    STYLES.find((style) => style.id === userInfo?.faceShapeBest)?.title || '';
  const { push } = useRouter();

  //NOTE : 카카오 서버로 인가 요청
  const handleClickHomeButton = () => {
    push('/');
  };
  return (
    <div className="flex flex-col px-[36px] mt-[75px] gap-[20px] items-center justify-center">
      <header className="title-32 text-grey-900 text-center">
        {userInfo?.nickname}님은 <br />
        {hairTitle}
        <span className="text-primary-500"> {faceShape}</span>
      </header>
      <UserCard
        nickname={userInfo?.nickname || ''}
        bestImageUrl={generatedBestImage?.url || ''}
        worstImageUrl={generatedWorstImage?.url || ''}
        isBest={isBest}
        onToggleStyle={handleToggleStyle}
        faceShapeBest={userInfo?.faceShapeBest || ''}
        faceShapeWorst={userInfo?.faceShapeWorst || ''}
      />
      <FloatingActionButton
        className="p-0 fixed bottom-5 right-3 bg-primary-300"
        onClick={handleClickHomeButton}
      >
        <Home />
      </FloatingActionButton>
    </div>
  );
}
