'use client';

import Logo from '../../public/assets/logo/logo.svg';
import KakaoLogo from '../../public/assets/icons/kakaoLogo_24.svg';

import CTAButton from '@/components/common/CTAButton';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { push } = useRouter();

  //NOTE : 카카오 서버로 인가 요청
  const handleClickKakaoLoginButton = () => {
    push(`${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-[35px]">
      <Logo />
      <p className="text-center">
        나만의 헤어스타일을 정해보는
        <span className="text-primary-500"> 즐거움</span>
        <br />
        나만의 포트폴리오를 만들어보는
        <span className="text-primary-500"> 즐거움</span>
      </p>
      <CTAButton
        className="bg-system-kakaoYellow text-system-kakaoBrown text-caption-14"
        size={'large'}
        onClick={handleClickKakaoLoginButton}
        disabled={false}
      >
        <KakaoLogo />
        카카오로 시작하기
      </CTAButton>
    </div>
  );
}
