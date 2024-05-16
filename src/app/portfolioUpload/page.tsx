'use client';

import { usePostFile } from '../api/file/usePostFile';
import { usePostProfile } from '../api/file/usePostProfileFile';
import { usePostPortfolio } from '../api/portfolio/usePostPortfolio';

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
  const [registerData, setRegisterData] = useState({});
  const { Funnel, Step, step, setStep } = useFunnel(STEPS[0]);
  const [workImageUrls, setWorkImageUrls] = useState<string[]>([]);
  const [certificateImageUrl, setCertificateImageUrl] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');

  const postFile = usePostFile();
  const postProfile = usePostProfile();
  const postPortfolio = usePostPortfolio();

  const handleChangeMultipleImage = async (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const example = (e.target.files as FileList)[0];
      const formData = new FormData();
      formData.append('files', example);
      const response = await postFile.mutateAsync(formData);
      const presignedUrl = response[0];
      if (step === '자격증') {
        setCertificateImageUrl(presignedUrl);
        return;
      }
      if (step === '작업내용') {
        setWorkImageUrls([...workImageUrls, presignedUrl]);
      }
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  const handleChangeProfileImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const example = (e.target.files as FileList)[0];
      const formData = new FormData();
      formData.append('file', example);
      const response = await postProfile.mutateAsync(formData);
      const presignedUrl = response;
      setProfileImageUrl(presignedUrl);
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
              setRegisterData(data);
              setStep(STEPS[1]);
            }}
            imageUrl={profileImageUrl}
            onChange={handleChangeProfileImage}
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
            onChange={handleChangeMultipleImage}
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
            onChange={handleChangeMultipleImage}
          />
        </Step>
        <Step name="마무리">
          <DesignerFinal />
        </Step>
      </Funnel>
    </div>
  );
}
