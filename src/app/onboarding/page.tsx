'use client';

import { usePostRole } from '../api/role/usePostRole';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [role, setRole] = useState('');
  const postRoleMutation = usePostRole();
  const { push } = useRouter();
  const handleRoleClick = (selectedRole: string) => {
    setRole(selectedRole);
    postRoleMutation.mutate(selectedRole);
    push(
      '/designerList?hairStyle1=단발 C컬펌&hairStyle2=보브컷&hairStyle3=숏컷',
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh gap-[70px]">
      <p className="text-center title-24 text-black">
        모락모락 가입을 축하합니다!
        <br />
        <span className="text-primary-500">어떤 모드</span>로 입장하실지
        선택해주세요.
      </p>
      <div className="flex w-full justify-around">
        <button
          onClick={() => handleRoleClick('GUEST')}
          className="flex flex-col items-center"
        >
          <Image
            src={'/assets/image/onboarding_guest.png'}
            alt={'guest'}
            width={150}
            height={150}
          />
          <p className="title-24 text-black">일반 유저</p>
        </button>
        <button
          onClick={() => handleRoleClick('DESIGNER')}
          className="flex flex-col items-center"
        >
          <Image
            src={'/assets/image/onboarding_designer.png'}
            alt={'designer'}
            width={150}
            height={150}
          />
          <p className="title-24 text-black">헤어 디자이너</p>
        </button>
      </div>
    </div>
  );
}
