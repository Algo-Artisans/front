'use client';

import CheckSmallFull from '../../../../public/assets/icons/checked_full_small_12.svg';
import CheckSmallEmpty from '../../../../public/assets/icons/checked_empty_small_12.svg';
import RadioFull from '../../../../public/assets/icons/radio_full_12.svg';
import RadioEmpty from '../../../../public/assets/icons/radio_empty_12.svg';

import {
  FILTERS,
  cutFilterProps,
  permFilterProps,
  sortFilterProps,
} from '@/constants/filters';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import CTAButton from '@/components/common/CTAButton';

export default function FilterModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOutsideClick: React.MouseEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(!isModalOpen);
    }
  };
  const [permIsSelected, setPermIsSelected] = useState(
    Array(FILTERS.length).fill(false),
  );
  const [cutIsSelected, setCutIsSelected] = useState(
    Array(FILTERS.length).fill(false),
  );
  const [selectedSortIndex, setSelectedSortIndex] = useState(2);

  const handleClickCheck = (index: number, filterType: string) => {
    let newIsSelected;
    switch (filterType) {
      case 'perm':
        newIsSelected = [...permIsSelected];
        newIsSelected[index] = !newIsSelected[index];
        setPermIsSelected(newIsSelected);
        break;
      case 'cut':
        newIsSelected = [...cutIsSelected];
        newIsSelected[index] = !newIsSelected[index];
        setCutIsSelected(newIsSelected);
        break;
      case 'sort':
        setSelectedSortIndex(index === selectedSortIndex ? 0 : index);
        break;
      default:
        break;
    }
  };

  return (
    isModalOpen && (
      <div
        className="relative flex justify-center bg-grey-500 bg-opacity-60 w-full h-dvh z-modal"
        onClick={handleOutsideClick}
      >
        <div
          className={cn(
            'absolute top-[90px] w-[303px] h-[364px] flex flex-wrap justify-start items-center bg-white rounded-[10px] px-[25px] py-[12px] gap-y-[6px] text-secondary-900',
          )}
        >
          <p className="caption-12 w-full text-left border-b-[1px] border-grey-300 pb-[8px]">
            헤어스타일
          </p>
          <p className="caption-12 w-full text-left">펌</p>
          {FILTERS.filter(
            (filter): filter is permFilterProps => 'permStyle' in filter,
          ).map((filter, index) => (
            <div
              key={index}
              className="flex flex-wrap w-1/3 items-center gap-x-[3px]"
            >
              <label>
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={() => handleClickCheck(index, 'perm')}
                />
                {permIsSelected[index] ? (
                  <CheckSmallFull />
                ) : (
                  <CheckSmallEmpty />
                )}
              </label>
              <span className="caption-10">{filter.permStyle}</span>
            </div>
          ))}
          <p className="caption-12 w-full pt-[10px]">커트</p>
          {FILTERS.filter(
            (filter): filter is cutFilterProps => 'cutStyle' in filter,
          ).map((filter, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-[6px] w-1/3 items-center"
            >
              <label>
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={() => handleClickCheck(index, 'cut')}
                />
                {cutIsSelected[index] ? (
                  <CheckSmallFull />
                ) : (
                  <CheckSmallEmpty />
                )}
              </label>
              <span className="caption-10">{filter.cutStyle}</span>
            </div>
          ))}
          <p className="caption-12 w-full text-left border-b-[1px] border-grey-300 pb-[8px]">
            정렬순
          </p>
          {FILTERS.filter(
            (filter): filter is sortFilterProps => 'sortStyle' in filter,
          ).map((filter, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-[6px] w-1/3 items-center"
            >
              <label>
                <input
                  type="radio"
                  className="hidden"
                  onChange={() => handleClickCheck(index, 'sort')}
                />
                {index === selectedSortIndex ? <RadioFull /> : <RadioEmpty />}
              </label>
              <span className="caption-10">{filter.sortStyle}</span>
            </div>
          ))}
          <div className="flex justify-end w-full mt-[10px]">
            <CTAButton size={'small'} disabled={false}>
              적용하기
            </CTAButton>
          </div>
        </div>
      </div>
    )
  );
}
