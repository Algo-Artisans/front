import { HTMLAttributes } from 'react';

interface ShowPriceListProps extends HTMLAttributes<HTMLDivElement> {
  style1: string;
  style2: string;
  style3: string;
  style4: string;
  cost1: string;
  cost2: string;
  cost3: string;
  cost4: string;
}

export default function ShowPriceList({
  style1,
  style2,
  style3,
  style4,
  cost1,
  cost2,
  cost3,
  cost4,
}: ShowPriceListProps) {
  return (
    <div className="flex flex-col w-full h-[190px] justify-between items-center rounded-[5px] bg-secondary-700 caption-14 text-white px-[14px] py-[22px]">
      <p className="flex justify-between w-full px-[10px]">
        <span>{style1}</span>
        <span>{cost1}</span>
      </p>
      <p className="flex justify-between w-full px-[10px]">
        <span>{style2}</span>
        <span>{cost2}</span>
      </p>
      <p className="flex justify-between w-full px-[10px]">
        <span>{style3}</span>
        <span>{cost3}</span>
      </p>
      <p className="flex justify-between w-full px-[10px]">
        <span>{style4}</span>
        <span>{cost4}</span>
      </p>
    </div>
  );
}
