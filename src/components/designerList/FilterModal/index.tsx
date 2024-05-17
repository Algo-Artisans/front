'use client';

import CheckSmallFull from '../../../../public/assets/icons/checked_full_small_12.svg';
import CheckSmallEmpty from '../../../../public/assets/icons/checked_empty_small_12.svg';
import RadioFull from '../../../../public/assets/icons/radio_full_12.svg';
import RadioEmpty from '../../../../public/assets/icons/radio_empty_12.svg';

import { cn } from '@/utils/cn';
import CTAButton from '@/components/common/CTAButton';
import { STYLEFILTERS } from '@/constants/stylefilters';
import { useEffect, useState } from 'react';
import { CHECKBOX_FILTERS } from '@/constants/checkboxFilters';
import { DROPDOWN_FILTERS } from '@/constants/dropdownFilters';

interface FilterProps {
  selectedStyles: string;
  selectedDropdown: string;
  onClose: (selectedStyles: string, dropdownValue: string) => void;
  isOpen: boolean;
}

export default function FilterModal({
  selectedStyles,
  selectedDropdown,
  onClose,
  isOpen,
}: FilterProps) {
  const [selectedOptions, setSelectedOptions] = useState('');
  const [selectedDropdownOption, setSelectedDropdownOption] =
    useState(selectedDropdown);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedOptions(selectedStyles);
    }
  }, [isOpen, selectedStyles]);

  const handleClickCheck = (index: number, filterType: string) => {
    setIsChecked(!isChecked);
    let newSelectedOptions: string[] = [];
    if (selectedOptions) {
      newSelectedOptions = selectedOptions.split(',');
    }

    let styleIndex = 0;

    switch (filterType) {
      case 'perm':
        styleIndex = index;
        break;
      case 'cut':
        styleIndex = index + 8;
        break;
      default:
        break;
    }

    if (styleIndex !== -1) {
      const style = STYLEFILTERS[styleIndex].style;

      if (newSelectedOptions.includes(style)) {
        newSelectedOptions = newSelectedOptions.filter(
          (option) => option !== style,
        );
      } else {
        newSelectedOptions.push(style);
        console.log(newSelectedOptions);
      }

      setSelectedOptions(
        newSelectedOptions.length > 0 ? newSelectedOptions.join(',') : '',
      );
    }
  };

  const handleDropdownClick = (category: string) => {
    setSelectedDropdownOption(category);
  };

  const handleOutsideClick: React.MouseEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (event.target === event.currentTarget) {
      onClose(selectedOptions, selectedDropdownOption);
    }
  };

  const handleInsideClick: React.MouseEventHandler<HTMLDivElement> = (
    event,
  ) => {
    event.stopPropagation();
  };

  const handleSubmitButton = () => {
    onClose(selectedOptions, selectedDropdownOption);
  };

  return (
    <div
      className="absolute top-0 flex justify-center bg-grey-500 bg-opacity-60 w-full h-dvh z-modal"
      onClick={handleOutsideClick}
    >
      <div
        className={cn(
          'absolute top-[90px] w-[303px] h-[364px] flex flex-wrap justify-start items-center bg-white rounded-[10px] px-[25px] py-[12px] gap-y-[6px] text-secondary-900',
        )}
        onClick={handleInsideClick}
      >
        <p className="caption-12 w-full text-left border-b-[1px] border-grey-300 pb-[8px]">
          헤어스타일
        </p>
        <p className="caption-12 w-full text-left">펌</p>
        {CHECKBOX_FILTERS.filter((filter) => filter.category === 'perm').map(
          (filter, index) => (
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
                {selectedOptions.includes(filter.style) ? (
                  <CheckSmallFull />
                ) : (
                  <CheckSmallEmpty />
                )}
              </label>
              <span className="caption-10">{filter.style}</span>
            </div>
          ),
        )}
        <p className="caption-12 w-full pt-[10px]">커트</p>
        {CHECKBOX_FILTERS.filter((filter) => filter.category === 'cut').map(
          (filter, index) => (
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
                {selectedOptions.includes(filter.style) ? (
                  <CheckSmallFull />
                ) : (
                  <CheckSmallEmpty />
                )}
              </label>
              <span className="caption-10">{filter.style}</span>
            </div>
          ),
        )}
        <p className="caption-12 w-full text-left border-b-[1px] border-grey-300 pb-[8px]">
          정렬순
        </p>
        {DROPDOWN_FILTERS.map((filter, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-[6px] w-1/3 items-center"
          >
            <label>
              <input
                type="radio"
                className="hidden"
                onChange={() => handleDropdownClick(filter.category)}
              />
              {selectedDropdownOption === filter.category ? (
                <RadioFull />
              ) : (
                <RadioEmpty />
              )}
            </label>
            <span className="caption-10">{filter.category}</span>
          </div>
        ))}
        <div className="flex justify-end w-full mt-[10px]">
          <CTAButton
            size={'small'}
            disabled={false}
            onClick={handleSubmitButton}
          >
            적용하기
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
