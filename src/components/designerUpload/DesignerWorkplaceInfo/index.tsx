import CTAButton from '@/components/common/CTAButton';
import InputField from '@/components/common/InputField';
import Title from '@/components/common/Title';
import { useState } from 'react';

interface DesignerWorkplaceInfoProps {
  onNext: (data: { workplace: string; phoneNumber: string }) => void;
}

export default function DesignerWorkplaceInfo({
  onNext,
}: DesignerWorkplaceInfoProps) {
  const [workplace, setWorkplace] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const handleClickCTAButton = () => {
    const data = {
      workplace,
      phoneNumber,
    };
    onNext(data);
  };

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <div className="w-full flex flex-col items-center gap-[60px]">
        <Title className="w-full">
          현재 디자이너님이 계신 <br />
          <span className="text-primary-300">근무지</span>에 대한 정보를
          알려주세요.
        </Title>

        <InputField
          className="text-white"
          value={workplace}
          title="근무지"
          placeholder="정확한 지점명까지 포함해주세요."
          required
          onChange={(e) => setWorkplace(e.target.value)}
        />
        <InputField
          className="text-white"
          value={phoneNumber}
          title="전화번호"
          placeholder="근무지점의 전화번호를 입력해주세요."
          required
          onChange={(e) => setphoneNumber(e.target.value)}
        />
      </div>
      <CTAButton
        size="large"
        disabled={workplace === '' || phoneNumber === ''}
        onClick={() => {
          if (workplace !== '' && phoneNumber !== '') {
            handleClickCTAButton();
          }
        }}
        className="absolute bottom-[40px]"
      >
        다음으로
      </CTAButton>
    </div>
  );
}
