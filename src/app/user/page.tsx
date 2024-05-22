'use client';

import { useGetUserInfo } from '../api/user/useGetUserInfo';
import { useGetS3Image } from '../api/user/useGetS3Image';
import AddIcon from '../../../public/assets/icons/add_16.svg';
import HomeIcon from '../../../public/assets/icons/home_20.svg';
import ShareIcon from '../../../public/assets/icons/share_16.svg';

import { STYLES } from '@/constants/styles';
import { useEffect, useState } from 'react';
import UserCard from '@/components/user/userCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { FILENAMES } from '@/constants/fileNames';
import FloatingActionButton from '@/components/user/FloatingActionButton';
import { motion } from 'framer-motion';
import { showCardVariants, showTextVariants } from '@/constants/motion';
import {
  openHorizontalButtonContainer,
  openHorizontalButtonItem,
  rotateButtonVariants,
} from '@/constants/motion';

export default function Page() {
  const [isFabClicked, setIsFabClicked] = useState(false);
  const handleClickFab = () => {
    setIsFabClicked(!isFabClicked);
  };

  const { data: userInfo } = useGetUserInfo();

  const searchParams = useSearchParams();

  const faceShapeBest = searchParams.get('bestFace');
  const faceShapeWorst = searchParams.get('worstFace');
  const [bestImageUrls, setBestImageUrls] = useState<string[]>([]);
  const [worstImageUrls, setWorstImageUrls] = useState<string[]>([]);

  useEffect(() => {
    FILENAMES.forEach((item) => {
      if (item.id === faceShapeBest) {
        setBestImageUrls(item.imageUrl);
      }
      if (item.id === faceShapeWorst) {
        setWorstImageUrls(item.imageUrl);
      }
    });
  }, [faceShapeBest, faceShapeWorst]);

  const { data: generatedBestImage } = useGetS3Image(
    userInfo?.kakaoId
      ? bestImageUrls.map((url) => `results/${userInfo.kakaoId}${url}`)
      : [],
  );
  const { data: generatedWorstImage } = useGetS3Image(
    userInfo?.kakaoId
      ? worstImageUrls.map((url) => `results/${userInfo.kakaoId}${url}`)
      : [],
  );

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

  const handleClickHomeButton = () => {
    push(
      `/designerList?hairStyle1=${styleList[0]}&hairStyle2=${styleList[1]}&hairStyle3=${styleList[2]}`,
    );
  };

  return (
    <div className="relative w-full h-full">
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
            bestImageUrl={generatedBestImage?.urls || []} // 이미지 URL 배열 전달
            worstImageUrl={generatedWorstImage?.urls || []}
            isBest={isBest}
            onToggleStyle={handleToggleStyle}
            faceShapeBest={userInfo?.faceShapeBest || ''}
            faceShapeWorst={userInfo?.faceShapeWorst || ''}
            styleList={styleList}
            styleDescription={styleDescription}
          />
        </motion.div>
      </div>
      <motion.div
        onClick={handleClickFab}
        variants={rotateButtonVariants}
        animate={isFabClicked ? 'active' : 'inactive'}
        className="bottom-5 right-5 w-[45px] h-[45px] fixed"
      >
        <FloatingActionButton
          className={isFabClicked ? 'bg-grey-300' : 'bg-primary-300'}
        >
          <AddIcon className="fill-secondary-900" />
        </FloatingActionButton>
      </motion.div>
      <motion.ol
        variants={openHorizontalButtonContainer}
        initial="closed"
        animate={isFabClicked ? 'open' : 'closed'}
        className="flex fixed bottom-5 gap-[10px] right-[75px]"
      >
        <motion.li variants={openHorizontalButtonItem}>
          <FloatingActionButton className="bg-primary-300">
            <ShareIcon />
          </FloatingActionButton>
        </motion.li>

        <motion.li variants={openHorizontalButtonItem}>
          <FloatingActionButton
            className="bg-primary-300"
            onClick={handleClickHomeButton}
          >
            <HomeIcon />
          </FloatingActionButton>
        </motion.li>
      </motion.ol>
    </div>
  );
}
