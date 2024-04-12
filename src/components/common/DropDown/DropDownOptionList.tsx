import { useDropDownContext } from './DropDownContainer';
import DropDownOption from './DropDownOption';

interface DropDownOptionListProps {
  options: string[];
  onSelect: (option: string) => void;
}

export default function DropDownOptionList({
  options,
  onSelect,
}: DropDownOptionListProps) {
  const { isOpen } = useDropDownContext();

  return (
    <div
      className={`absolute w-[100%] top-[80px] border-[1px] border-grey-300 shadow-button ${isOpen ? 'py-[20px] px-[10px] bg-white rounded-[6px]' : 'hidden'}`}
    >
      <ul className="flex flex-col gap-[20px]">
        {options.map((option, index) => (
          <DropDownOption key={index} option={option} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
}
