import { useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import InputField from '@/components/common/InputField';
import Title from '@/components/common/Title';

interface DesignerIntroductionProps {
  onNext: (data: { introduction: string; snsAddress: string }) => void;
}

export default function DesignerIntroduction({
  onNext,
}: DesignerIntroductionProps) {
  const [introduction, setIntroduction] = useState('');
  const [snsAddress, setSnsAddress] = useState('');
  const handleClickCTAButton = () => {
    const data = {
      introduction,
      snsAddress,
    };
    onNext(data);
  };

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <div className="w-full flex flex-col items-center gap-[85px]">
        <Title className="w-full">
          디자이너님을 멋지게 표현할 수 있는 <br />
          <span className="text-primary-300">한 줄 소개</span>가 있을까요?
        </Title>
        <InputField
          className="text-white"
          value={introduction}
          title="한 줄 소개"
          placeholder="본인을 가장 잘 표현할 수 있는 문구를 써주세요."
          required
          onChange={(e) => setIntroduction(e.target.value)}
        />
        <InputField
          className="text-white"
          value={snsAddress}
          title="SNS(선택)"
          placeholder="SNS 계정 ID가 있다면 작성해주세요."
          onChange={(e) => setSnsAddress(e.target.value)}
        />
      </div>
      <CTAButton
        size="large"
        disabled={introduction === ''}
        onClick={() => {
          if (introduction !== '') {
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
