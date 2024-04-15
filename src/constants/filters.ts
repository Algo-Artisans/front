export interface permFilterProps {
  permStyle: string;
}

export interface cutFilterProps {
  cutStyle: string;
}

export interface sortFilterProps {
  sortStyle: string;
}

export type filterProps = permFilterProps | cutFilterProps | sortFilterProps;

export const FILTERS: filterProps[] = [
  { permStyle: '사이드뱅' },
  { permStyle: '아이롱펌' },
  { permStyle: '히피펌' },
  { permStyle: '스트레이트' },
  { permStyle: '단발 C컬펌' },
  { permStyle: '장발 C컬펌' },
  { permStyle: '단발 레이어드펌' },
  { permStyle: '중단발레이어드펌' },
  { cutStyle: '보브컷' },
  { cutStyle: '숏컷' },
  { cutStyle: '레이어드컷' },
  { cutStyle: '샤밍컷' },
  { cutStyle: '사이드뱅' },
  { cutStyle: '태슬컷' },
  { sortStyle: '인기순' },
  { sortStyle: '추천순' },
  { sortStyle: '최신순' },
];
