import CheckedFull from '../../../../public/assets/icons/checked_full_22.svg';
import CheckedEmpty from '../../../../public/assets/icons/checked_empty_22.svg';
import RightArrow from '../../../../public/assets/icons/arrow_right_6.svg';

import { InputHTMLAttributes } from 'react';

interface TermsItemProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  policyTitle: string;
  // policyDescription: string;
  required: boolean;
  checked: boolean;
}

export default function Terms({
  id,
  policyTitle,
  required,
  checked,
  onChange,
  ...restProps
}: TermsItemProps) {
  return (
    <label className="flex w-full justify-between items-center">
      <div className="flex gap-[10px] caption-16 items-center">
        {required ? (
          <span className="text-primary-500">필수</span>
        ) : (
          <span className="text-black">선택</span>
        )}
        <span className="flex justify-center items-center gap-[10px] text-grey-800">
          {policyTitle} <RightArrow />
        </span>
      </div>
      <input
        id={id}
        type="checkbox"
        required={required}
        onChange={onChange}
        className="hidden"
        {...restProps}
      />
      {checked ? <CheckedFull /> : <CheckedEmpty />}
    </label>
  );
}
