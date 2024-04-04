'use client';

import UserCard from '@/components/user/userCard';

export default function Page() {
  const test = ['C컬펌 단발', '보브컷', '레이어드펌 중단발'];
  return (
    <div className="flex flex-col px-[36px] mt-[75px] gap-[20px] items-center justify-center">
      <header className="title-32 text-grey-900 text-center">
        모자람없는인생님은 <br />
        무엇이든 찰떡인
        <span className="text-primary-500"> 계란형</span>
      </header>
      <UserCard
        nickname={'모자람없는인생'}
        generatedPictureUrl={'/assets/pic/test.png'}
        isBest={true}
        styleDescription={`내추럴한 느낌의 시스루뱅이나
           펌이 이 유형에 속해요.`}
        styleList={test}
      />
    </div>
  );
}
