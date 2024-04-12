import { useDropDownContext } from './DropDownContainer';

interface DropDownOptionProps {
  option: string;
  onSelect: (option: string) => void;
}

export default function DropDownOption({
  option,
  onSelect,
}: DropDownOptionProps) {
  const { setSelectedItem, isOpen, setIsOpen } = useDropDownContext();

  const handleItemClick = () => {
    setSelectedItem(option);
    onSelect(option);
    setIsOpen(!isOpen);
  };

  return (
    <li className="text-grey-900 caption-16" onClick={handleItemClick}>
      {option}
    </li>
  );
}
