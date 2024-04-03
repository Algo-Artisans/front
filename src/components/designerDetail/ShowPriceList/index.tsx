import { HTMLAttributes } from 'react';

interface ShowPriceListProps extends HTMLAttributes<HTMLDivElement> {
  hairStyle: string;
  price: string;
}

export default function ShowPriceList({
  hairStyle,
  price,
}: ShowPriceListProps) {
  return (
    <div className="flex w-full h-[190px] justify-between items-center rounded-[5px] bg-secondary-700 caption-14 text-white px-[14px] py-[22px] mx-[24px]">
      <span>{hairStyle}</span>
      <span>{price}</span>
    </div>
  );
}
