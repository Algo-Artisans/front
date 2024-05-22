'use client';

import { usePostFiles } from '../api/file/usePostFile';
import {
  PostPortfolioProps,
  usePostPortfolio,
} from '../api/portfolio/usePostPortfolio';
import { usePostSingleFile } from '../api/file/usePostSingleFile';

import DesignerCertificate from '@/components/designerUpload/DesignerCertificate';
import DesignerFinal from '@/components/designerUpload/DesignerFinal';
import DesignerIntroduction from '@/components/designerUpload/DesignerIntroduction';
import DesignerPrices from '@/components/designerUpload/DesignerPrices';
import DesignerStart from '@/components/designerUpload/DesignerStart';
import DesignerWorkplaceInfo from '@/components/designerUpload/DesignerWorkplaceInfo';
import DesignerWorks from '@/components/designerUpload/DesignerWorks';
import { STEPS } from '@/constants/steps';
import { useFunnel } from '@/hooks/useFunnel';
import { ChangeEvent, useState } from 'react';

export default function Page() {
  const [registerData, setRegisterData] = useState<PostPortfolioProps>({});

  const { Funnel, Step, setStep } = useFunnel(STEPS[0]);
  const [workImageUrls, setWorkImageUrls] = useState<string[]>([]);

  const [isProfileTrue, setIsProfileTrue] = useState(true);
  const [isCertificateTrue, setIsCertificateTrue] = useState(false);

  const [certificateImageUrl, setCertificateImageUrl] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');

  const postFile = usePostFiles();
  const postSingleFile = usePostSingleFile();
  const postPortfolio = usePostPortfolio();
  if (postPortfolio.data?.portfolioId) {
    const myPortfolioId = String(postPortfolio.data.portfolioId);
    localStorage.setItem('portfolioId', myPortfolioId);
  }

  const handleChangeMultipleImages = async (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const example = (e.target.files as FileList)[0];
      const formData = new FormData();
      formData.append('files', example);
      const response = await postFile.mutateAsync(formData);
      const presignedUrl = response[0];

      setWorkImageUrls([...workImageUrls, presignedUrl]);
      setRegisterData((prevData) => ({
        ...prevData,
        [`imageUrl${workImageUrls.length + 1}`]: presignedUrl,
      }));
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  const handleChangeSingleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const target = e.target.files?.[0];
      if (target) {
        const response = await postSingleFile.mutateAsync({
          certificate: isCertificateTrue,
          profile: isProfileTrue,
          file: target,
        });
        const presignedUrl = response;

        if (isProfileTrue) {
          setProfileImageUrl(presignedUrl);
          setRegisterData({ profileURL: presignedUrl });
          return;
        }
        setCertificateImageUrl(presignedUrl);
        setRegisterData((prevData) => ({
          ...prevData,
          certificateUrl: presignedUrl,
        }));
      }
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh bg-secondary-900 pt-[100px] px-[16px]">
      <Funnel>
        <Step name="기본정보">
          <DesignerStart
            onNext={(data) => {
              setRegisterData((prevData) => ({ ...prevData, ...data }));
              setIsProfileTrue(false);
              setIsCertificateTrue(true);
              setStep(STEPS[1]);
            }}
            imageUrl={profileImageUrl}
            onChange={handleChangeSingleImage}
          />
        </Step>
        <Step name="자기소개">
          <DesignerIntroduction
            onNext={(data) => {
              setRegisterData((prevData) => ({ ...prevData, ...data }));
              setStep(STEPS[2]);
            }}
          />
        </Step>
        <Step name="근무지">
          <DesignerWorkplaceInfo
            onNext={(data) => {
              setRegisterData((prevData) => ({ ...prevData, ...data }));
              setStep(STEPS[3]);
            }}
          />
        </Step>
        <Step name="작업내용">
          <DesignerWorks
            onNext={(hairStyles) => {
              setRegisterData((prevData) => ({ ...prevData, ...hairStyles }));
              setStep(STEPS[4]);
            }}
            workImagesUrl={workImageUrls}
            onChange={handleChangeMultipleImages}
          />
        </Step>
        <Step name="가격표">
          <DesignerPrices
            onNext={(data) => {
              setRegisterData((prevData) => ({ ...prevData, ...data }));
              setStep(STEPS[5]);
            }}
          />
        </Step>
        <Step name="자격증">
          <DesignerCertificate
            onNext={() => {
              setStep(STEPS[6]);
              postPortfolio.mutate(registerData);
            }}
            certificateImageUrl={certificateImageUrl}
            onChange={handleChangeSingleImage}
          />
        </Step>
        <Step name="마무리">
          <DesignerFinal />
        </Step>
      </Funnel>
    </div>
  );
}
