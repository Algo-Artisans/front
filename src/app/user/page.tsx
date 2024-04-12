'use client';

import { useGetUserInfo } from '../api/user/useGetUserInfo';

import { useState } from 'react';
import UserCard from '@/components/user/userCard';
import { STYLES } from '@/constants/styles';

export default function Page() {
  const { data: userInfo } = useGetUserInfo();

  const [isBest, setIsBest] = useState(true);
  const handleToggleStyle = () => {
    setIsBest((prevIsBest) => !prevIsBest);
  };

  const faceShape: string =
    STYLES.find((style) => style.id === userInfo?.faceShapeBest)?.faceShape ||
    '';

  const hairTitle: string =
    STYLES.find((style) => style.id === userInfo?.faceShapeBest)?.title || '';

  return (
    <div className="flex flex-col px-[36px] mt-[75px] gap-[20px] items-center justify-center">
      <header className="title-32 text-grey-900 text-center">
        {userInfo?.nickname}님은 <br />
        {hairTitle}
        <span className="text-primary-500"> {faceShape}</span>
      </header>
      <UserCard
        nickname={userInfo?.nickname || ''}
        //TODO: S3에서 불러온 이미지 여기 넣기
        generatedPictureUrl={'/assets/image/user_example_img.svg'}
        isBest={isBest}
        onToggleStyle={handleToggleStyle}
        faceShapeBest={userInfo?.faceShapeBest || ''}
        faceShapeWorst={userInfo?.faceShapeWorst || ''}
      />
    </div>
  );
}
