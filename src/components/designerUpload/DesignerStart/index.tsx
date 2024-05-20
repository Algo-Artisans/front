import CTAButton from '@/components/common/CTAButton';
import InputField from '@/components/common/InputField';
import Title from '@/components/common/Title';
import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';

interface DesignerStartProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNext: (data: { name: string }) => void;
  imageUrl: string;
}

export default function DesignerStart({
  onNext,
  imageUrl,
  onChange,
}: DesignerStartProps) {
  const imageUploadButtonRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const handleClickCTAButton = () => {
    const data = {
      name,
    };
    onNext(data);
  };

  const handleImageUpload = () => {
    imageUploadButtonRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <div className="w-full flex flex-col items-center gap-[60px]">
        <Title className="w-full">
          환영합니다, 디자이너님!
          <br />
          디자이너님의<span className="text-primary-300"> 기본 정보</span>를
          등록해주세요.
        </Title>
        {imageUrl ? (
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
            <Image
              className="object-cover rounded-full"
              src={imageUrl}
              alt="프로필 사진"
              fill
            />
          </div>
        ) : (
          <div onClick={handleImageUpload}>
            <Image
              src={'/assets/image/profile_img_upload.png'}
              alt={'프로필등록'}
              width={120}
              height={120}
            />
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={onChange}
              ref={imageUploadButtonRef}
            />
          </div>
        )}
        <InputField
          className="text-white"
          value={name}
          title="이름"
          placeholder="디자이너명을 작성해주세요."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <CTAButton
        size="large"
        disabled={name === ''}
        onClick={() => {
          if (name !== '') {
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
