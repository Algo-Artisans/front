import ApproveBadge from '../../../../public/assets/icons/approve_badge_257.svg';

import { useEffect } from 'react';
import Title from '@/components/common/Title';
import { useRouter } from 'next/navigation';

export default function DesignerFinal() {
  const { push } = useRouter();
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     push('/designerList');
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-y-[40px]">
      <ApproveBadge />
      <div className="flex flex-col gap-y-[10px]">
        <Title className="text-center">
          축하합니다! <br /> 무사히 포트폴리오를 등록하셨습니다!
        </Title>
        <p className="text-white text-center caption-16">
          잠시 후 메인 화면으로 이동합니다.
        </p>
      </div>
    </div>
  );
}
