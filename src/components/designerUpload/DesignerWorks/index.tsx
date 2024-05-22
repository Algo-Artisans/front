import PillFilter from '../PillFilter';

import ImageContainer from '@/components/common/Image';
import CTAButton from '@/components/common/CTAButton';
import Title from '@/components/common/Title';
import { STYLEFILTERS } from '@/constants/stylefilters';
import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';

interface DesignerWorksProps {
  onNext: (data: {
    hairName1: string;
    hairName2: string;
    hairName3: string;
  }) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  workImagesUrl: string[];
}

export default function DesignerWorks({
  onNext,
  onChange,
  workImagesUrl,
}: DesignerWorksProps) {
  const [selectedHairStyles, setSelectedHairStyles] = useState<string[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const imageUploadButtonRef = useRef<HTMLInputElement>(null);

  const handleClickCTAButton = () => {
    const hairData = {
      hairName1: selectedHairStyles[0] || '',
      hairName2: selectedHairStyles[1] || '',
      hairName3: selectedHairStyles[2] || '',
    };
    onNext(hairData);
  };

  const handlePillSelect = (name: string) => {
    if (selectedCount <= 3) {
      if (selectedHairStyles.includes(name)) {
        setSelectedHairStyles(
          selectedHairStyles.filter((style) => style !== name),
        );
        setSelectedCount((prevCount) => prevCount - 1);
        return;
      }
      setSelectedHairStyles([...selectedHairStyles, name]);
      setSelectedCount((prevCount) => prevCount + 1);
      return;
    }
  };

  const handleImageUpload = () => {
    imageUploadButtonRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <div className="w-full flex flex-col items-center gap-[60px]">
        <Title className="w-full">
          평소 디자이너님의 작업이 궁금해요!
          <br />
          <span className="text-primary-300">전문 스타일</span>과
          <span className="text-primary-300"> 작업물</span>들을 알려주세요.
        </Title>
        <div className="w-full h-full">
          <p className="text-white caption-16 mb-[5px]">작업물 등록</p>
          <p className="text-white caption-12 mb-[5px]">
            디자이너님만의 헤어스타일 작품들을
            <span className="text-primary-300"> 4장</span> 공유해주세요!
          </p>
          <div className="flex gap-x-[10px] overflow-x-scroll">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[138px] h-[150px] overflow-hidden rounded-[10px] relative" // 변경: flex-shrink-0 추가 및 스타일 조정
              >
                {workImagesUrl[index] ? (
                  <ImageContainer
                    key={index}
                    type={'medium'}
                    src={workImagesUrl[index]}
                    alt={`작업물 ${index}`}
                  />
                ) : (
                  <div
                    key={`upload-${index}`}
                    onClick={handleImageUpload}
                    className="relative w-[138px] h-[150px] rounded-[10px]"
                  >
                    <Image
                      src={'/assets/image/work_img_upload.png'}
                      alt={'작업물등록'}
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
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-white caption-16 mb-[5px]">전문 헤어</p>
          <p className="text-white caption-12 mb-[5px]">
            평소 자신있는 전문 헤어스타일을
            <span className="text-primary-300"> 3개</span> 골라주세요
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[18px] mt-[20px]">
            {STYLEFILTERS.map((style, index) => (
              <PillFilter
                key={index}
                onSelect={handlePillSelect}
                selectedCount={selectedCount}
              >
                {style.style}
              </PillFilter>
            ))}
          </div>
        </div>
      </div>
      <CTAButton
        size="large"
        disabled={false}
        onClick={handleClickCTAButton}
        className="absolute bottom-[40px]"
      >
        다음으로
      </CTAButton>
    </div>
  );
}
