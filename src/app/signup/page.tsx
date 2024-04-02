'use client';

import { TERMS } from '../../constants/terms';

import DropDown from '@/components/common/DropDown';
import CTAButton from '@/components/common/CTAButton';
import AllTerms from '@/components/signUp/AllTerms';
import Terms from '@/components/signUp/Terms';
import { useMemo, useState } from 'react';
import InputField from '@/components/common/InputField';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { push } = useRouter();

  const [isClicked, setIsClicked] = useState(
    TERMS.map((term) => ({ ...term, checked: false })),
  );

  const isTermsAllClicked = useMemo(() => {
    return Object.values(isClicked).every((term) => term.checked);
  }, [isClicked]);

  const isRequiredTermsClicked = isClicked.every(
    (term) => !term.required || term.checked,
  );

  const handleClickAllCheck = () => {
    setIsClicked((prevTerms) =>
      prevTerms.map((term) => ({ ...term, checked: !isTermsAllClicked })),
    );
  };

  const handleClickCheck = (id: string) => () => {
    setIsClicked((prevTerms) =>
      prevTerms.map((term) =>
        term.id === id ? { ...term, checked: !term.checked } : term,
      ),
    );
  };

  const handleClickCTAButton = () => {
    //TODO: api 로직 추가 & 온보딩으로 보내기
    push('/');
  };

  return (
    <div className="flex flex-col justify-center gap-[50px] pt-[100px] px-[18px]">
      <p className="text-left subtitle-22 text-black py-[16px]">
        모락모락이 처음이시군요!
        <br />
        먼저 <span className="text-primary-500">회원가입</span>을 진행해주세요
      </p>
      <form className="flex flex-col gap-y-[30px]">
        <InputField
          placeholder="최대 8글자의 닉네임을 생성해주세요."
          title="닉네임"
          pattern="^[가-힣a-zA-Z]{1,8}$"
        />
        <div className="relative w-full flex flex-col gap-[10px]">
          <DropDown.Container>
            <DropDown.Header DropDownTitle="성별"></DropDown.Header>
            <DropDown.Trigger />
            <DropDown.OptionList options={['여자', '남자']} />
          </DropDown.Container>
        </div>
        <div className="flex flex-col items-center w-full gap-[35px] my-[40px]">
          <AllTerms
            onChange={handleClickAllCheck}
            checked={isTermsAllClicked}
          />
          {TERMS.map((term, index) => (
            <Terms
              key={term.id}
              id={term.id}
              policyTitle={term.policyTitle}
              policyDescription={term.policyDescription}
              required={term.required}
              checked={isClicked[index].checked}
              onChange={handleClickCheck(term.id)}
            />
          ))}
        </div>
        <CTAButton
          size={'large'}
          className="w-[100%]"
          onClick={handleClickCTAButton}
          disabled={!isRequiredTermsClicked}
        >
          다음으로
        </CTAButton>
      </form>
    </div>
  );
}
