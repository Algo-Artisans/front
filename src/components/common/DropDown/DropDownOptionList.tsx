import { useDropDownContext } from './DropDownContainer';
import DropDownOption from './DropDownOption';

interface DropDownOptionListProps {
  options: string[];
}

export default function DropDownOptionList({
  options,
}: DropDownOptionListProps) {
  const { isOpen } = useDropDownContext();

  return (
    <div
      className={`absolute w-full top-[80px] left-[18px] border-[1px] border-grey-300 shadow-button ${isOpen ? 'p-[10px] w-screen bg-white rounded-[6px]' : 'hidden'}`}
    >
      <ul className="gap-[10px]">
        {options.map((option, index) => (
          <DropDownOption key={index} option={option} />
        ))}
      </ul>
    </div>
  );
}
