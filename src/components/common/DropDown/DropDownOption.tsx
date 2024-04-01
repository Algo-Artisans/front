import { useDropDownContext } from './DropDownContainer';

interface DropDownOptionProps {
  option: string;
}

export default function DropDownOption({ option }: DropDownOptionProps) {
  const { setSelectedItem, isOpen, setIsOpen } = useDropDownContext();

  const handleItemClick = () => {
    setSelectedItem(option);
    setIsOpen(!isOpen);
  };

  return (
    <li className="text-grey-900 text-caption-16" onClick={handleItemClick}>
      {option}
    </li>
  );
}
