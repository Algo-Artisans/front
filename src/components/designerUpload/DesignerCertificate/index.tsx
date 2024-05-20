import { ChangeEvent, useRef } from 'react';
import CTAButton from '@/components/common/CTAButton';
import Image from 'next/image';
import Title from '@/components/common/Title';

interface DesignerCertificateProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  certificateImageUrl: string;
}

export default function DesignerCertificate({
  onNext,
  onChange,
  certificateImageUrl,
}: DesignerCertificateProps) {
  const imageUploadButtonRef = useRef<HTMLInputElement>(null);

  const handleClickCTAButton = () => {
    onNext();
  };

  const handleImageUpload = () => {
    imageUploadButtonRef.current?.click();
  };
  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <div className="w-full flex flex-col items-center gap-[50px]">
        <Title className="w-full">
          거의 다 작성해주셨어요! <br />
          마지막으로 <span className="text-primary-300">미용 자격증</span>을
          올려주세요!
        </Title>
        {certificateImageUrl ? (
          <div className="relative w-full h-[175px] overflow-hidden rounded-[20px]">
            <Image
              className="object-cover rounded-[20px]"
              src={certificateImageUrl}
              alt="리뷰 업로드 사진"
              fill
            />
          </div>
        ) : (
          <div
            onClick={handleImageUpload}
            className="relative w-full h-[175px]"
          >
            <Image
              src={'/assets/image/certificate_img_upload.png'}
              alt={'자격증등록'}
              fill
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
      </div>
      <CTAButton
        size="large"
        //TODO: 수정
        disabled={false}
        onClick={() => {
          handleClickCTAButton();
        }}
        className="absolute bottom-[40px]"
      >
        다음으로
      </CTAButton>
    </div>
  );
}
