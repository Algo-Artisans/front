interface Terms {
  id: string;
  policyTitle: string;
  policyDescription: string;
  required: boolean;
}

export const TERMS: Terms[] = [
  {
    id: 'termsOfUse',
    policyTitle: '서비스 이용약관',
    policyDescription: '이용약관 내용',
    required: true,
  },
  {
    id: 'personalInfo',
    policyTitle: '개인정보 수집 및 이용동의',
    policyDescription: '개인정보 수집 관련 내용',
    required: true,
  },
  {
    id: 'thirdPerson',
    policyTitle: '제 3자 정보 제공 동의',
    policyDescription: '제 3자 정보 제공 동의에 관한 내용',
    required: false,
  },
];
