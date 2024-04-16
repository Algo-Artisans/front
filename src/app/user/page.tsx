'use client';

import { useGetUserInfo } from '../api/user/useGetUserInfo';
import useGetS3Image from '../api/user/useGetS3Image';
import Home from '../../../public/assets/icons/home_35.svg';

import { STYLES } from '@/constants/styles';
import { useEffect, useState } from 'react';
import UserCard from '@/components/user/userCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { FILENAMES } from '@/constants/fileNames';
import FloatingActionButton from '@/components/user/FloatingActionButton';
import { motion } from 'framer-motion';
import { showCardVariants, showTextVariants } from '@/constants/motion';

export default function Page() {
  const { data: userInfo } = useGetUserInfo();

  const searchParams = useSearchParams();

  const faceShapeBest = searchParams.get('bestFace');
  const faceShapeWorst = searchParams.get('worstFace');
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
    STYLES.find((style) => style.name === userInfo?.faceShapeBest)?.faceShape ||
    '';

  const hairTitle: string =
    STYLES.find((style) => style.name === userInfo?.faceShapeBest)?.title || '';

  const { push } = useRouter();

  const styleList: string[] = isBest
    ? STYLES.find((style) => style.id === faceShapeBest)?.hairStyle || []
    : STYLES.find((style) => style.id === faceShapeWorst)?.hairStyle || [];

  const styleDescription: string = isBest
    ? STYLES.find((style) => style.id === faceShapeBest)?.description || ''
    : STYLES.find((style) => style.id === faceShapeWorst)?.description || '';

  //NOTE : 카카오 서버로 인가 요청
  const handleClickHomeButton = () => {
    push(
      '/designerList?hairStyle1=단발 C컬펌&hairStyle2=보브컷&hairStyle3=숏컷',
    );
  };
  return (
    <div className="flex flex-col px-[36px] mt-[75px] gap-[20px] items-center justify-center">
      <motion.div
        variants={showTextVariants}
        animate={['animate', 'opacity']}
        initial="initial"
        exit="exit"
        className="title-32 text-grey-900 text-center"
      >
        {userInfo?.nickname}님은 <br />
        {hairTitle}
        <p className="text-primary-500"> {faceShape}</p>
      </motion.div>
      <motion.div
        variants={showCardVariants}
        animate={['animate', 'opacity']}
        initial="initial"
        exit="exit"
      >
        <UserCard
          nickname={userInfo?.nickname || ''}
          bestImageUrl={generatedBestImage?.url || ''}
          worstImageUrl={generatedWorstImage?.url || ''}
          isBest={isBest}
          onToggleStyle={handleToggleStyle}
          faceShapeBest={userInfo?.faceShapeBest || ''}
          faceShapeWorst={userInfo?.faceShapeWorst || ''}
          styleList={styleList}
          styleDescription={styleDescription}
        />
      </motion.div>
      <FloatingActionButton
        className="p-0 fixed bottom-5 right-3 bg-primary-300"
        onClick={handleClickHomeButton}
      >
        <Home />
      </FloatingActionButton>
    </div>
  );
}
