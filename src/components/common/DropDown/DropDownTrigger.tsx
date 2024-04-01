import DownArrow from '../../../../public/assets/icons/arrow_downward_16.svg';
import UpArrow from '../../../../public/assets/icons/arrow_upward_16.svg';
import { useDropDownContext } from './DropDownContainer';

import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export default function DropDownTrigger({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const { isOpen, setIsOpen, selectedItem } = useDropDownContext();

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={cn(
        'flex w-full h-[44px] bg-white border-[1px] border-grey-300 justify-between items-center text-grey-500 caption-16 px-[10px] rounded-[6px]',
        className,
      )}
      {...props}
      onClick={toggleDropDown}
    >
      {selectedItem}
      {isOpen ? <DownArrow /> : <UpArrow />}
    </button>
  );
}
