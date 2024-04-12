interface stylesProps {
  id: string;
  faceShape: string;
  title: string;
  hairStyle: string[];
  description: string;
}

export const STYLES: stylesProps[] = [
  {
    id: 'Heart',
    faceShape: '역삼각형',
    hairStyle: ['단발 C컬펌', '아이롱펌', '보브컷'],
    description:
      '앞머리 있는 단발 혹은 \n 볼륨이 많은 헤어가 이 유형에 속해요.',
    title: '시크하고 도도한',
  },
  {
    id: 'Long',
    faceShape: '긴형',
    hairStyle: ['레이어드컷', '히피펌', '중단발 레이어드펌'],
    description: '사이드에 볼륨이 많은 \n 중단발의 헤어가 이 유형에 속해요.',
    title: '세련되고 성숙한',
  },
  {
    id: 'Round',
    faceShape: '둥근형',
    hairStyle: ['스트레이트', '숏컷', '태슬컷'],
    description: '직선 느낌을 낼 수 있는 \n 스트레이트 헤어가 이 유형에 속해요',
    title: '발랄하고 청순한',
  },
  {
    id: 'Square',
    faceShape: '사각형',
    hairStyle: ['단발 레이어드펌', '허쉬컷', '샤밍컷'],
    description:
      '앞머리가 없고 5:5 가르마의, \n 층이 있는 단발의 헤어가 이 유형에 속해요.',
    title: '지적이고 우아한',
  },
  {
    id: 'Oval',
    faceShape: '계란형',
    hairStyle: ['C컬펌 장발', '빌드펌', '사이드뱅'],
    description: '내추럴한 느낌의 시스루뱅이나 \n 펌이 이 유형에 속해요.',
    title: '무엇이든 찰떡인',
  },
];
