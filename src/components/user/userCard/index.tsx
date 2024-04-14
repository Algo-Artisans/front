import MultipleUpwardArrow from '../../../../public/assets/icons/multiple_arrow_upward_25.svg';
import FloatingActionButton from '../FloatingActionButton';
import Home from '../../../../public/assets/icons/home_35.svg';

import ImageContainer from '@/components/common/Image';
import Tag from '@/components/common/Tag';
import { STYLES } from '@/constants/styles';
import { useRouter } from 'next/navigation';

interface userCardProps {
  nickname: string;
  faceShapeBest: string;
  faceShapeWorst: string;
  isBest: boolean;
  bestImageUrl: string;
  worstImageUrl: string;
  onToggleStyle: () => void;
}

export default function UserCard({
  nickname,
  faceShapeBest,
  faceShapeWorst,
  bestImageUrl,
  worstImageUrl,
  isBest,
  onToggleStyle,
}: userCardProps) {
  const styleList: string[] = isBest
    ? STYLES.find((style) => style.id === faceShapeBest)?.hairStyle || []
    : STYLES.find((style) => style.id === faceShapeWorst)?.hairStyle || [];

  const styleDescription: string = isBest
    ? STYLES.find((style) => style.id === faceShapeBest)?.description || ''
    : STYLES.find((style) => style.id === faceShapeWorst)?.description || '';

  const { push } = useRouter();

  //NOTE : 카카오 서버로 인가 요청
  const handleClickHomeButton = () => {
    push('/');
  };

  return (
    <div className="relative flex flex-col items-center w-full h-dvh bg-secondary-900 rounded-[20px] pt-[40px] px-[30px] gap-[38px]">
      <p className="title-24 text-white text-center">
        모락모락이 알려주는 <br />
        <span className="text-primary-300">{isBest ? 'BEST ' : 'WORST '}</span>
        헤어스타일
      </p>
      <ImageContainer
        type={'extraLarge'}
        src={isBest ? bestImageUrl : worstImageUrl}
        alt={nickname}
      />
      {/* TODO: 캐러셀 넣을 경우 stepIcon 넣기 */}
      <div className="flex flex-col justify-start px-[20px] gap-y-[52px] mt-[30px]">
        <div className="flex flex-col gap-[34px]">
          <p className="subtitle-20 text-white">
            {isBest ? '나한테 꼭 맞는 헤어 유형' : '내가 피하면 좋은 헤어 유형'}
          </p>
          <p className="caption-16 text-grey-300">{styleDescription}</p>
        </div>
        <div className="flex flex-col gap-[34px]">
          <p className="subtitle-20 text-white">
            {isBest ? '추천하는 헤어스타일' : '비추천하는 헤어스타일'}
          </p>
          <div className="flex align-center gap-[10px]">
            {styleList.map((style, index) => (
              <Tag
                key={index}
                styleKeyword={style}
                hashTagTrue={false}
                className="shadow-tag caption-14 h-[30px]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute w-full h-[253px] bg-secondary-500 bottom-[-150px] rounded-t-[20px]"></div>
      <div
        className="flex flex-col justify-center items-center gap-[20px] absolute w-full h-[253px] bg-secondary-300 bottom-[-190px] rounded-t-[20px]"
        onClick={onToggleStyle}
      >
        <MultipleUpwardArrow />
        <p className="caption-14 text-white text-center">
          위로 슬라이드해
          <br />
          {isBest ? 'WORST' : 'BEST'} 스타일도 확인해보세요!
        </p>
        <FloatingActionButton
          className="p-0 fixed bottom-5 right-3 bg-primary-300"
          onClick={handleClickHomeButton}
        >
          <Home />
        </FloatingActionButton>
      </div>
    </div>
  );
}
