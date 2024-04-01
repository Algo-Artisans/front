import CheckedEmpty from '../../../../public/assets/icons/checked_empty_22.svg';
import CheckedFull from '../../../../public/assets/icons/checked_full_22.svg';

import { InputHTMLAttributes } from 'react';

export default function AllTerms({
  checked,
  onChange,
  ...restProps
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex w-full justify-between border-b-[2px] border-grey-300 pb-[8px]">
      <p className="subtitle-20">약관 동의</p>
      <input
        type="checkbox"
        onChange={onChange}
        className="hidden"
        {...restProps}
      />
      {checked ? <CheckedFull /> : <CheckedEmpty />}
    </label>
  );
}
