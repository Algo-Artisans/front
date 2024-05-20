import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode, useState } from 'react';

interface PillFilterProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onSelect'> {
  children: ReactNode;
  onSelect: (name: string) => void;
  selectedCount: number; // 추가: 선택된 필터의 개수
}

export default function PillFilter({
  children,
  onSelect,
  selectedCount,
  ...props
}: PillFilterProps) {
  const [selected, setSelected] = useState(false);

  const handlePillClick = () => {
    if (selectedCount + 1 <= 3 || selected) {
      setSelected(!selected);
      onSelect(children!.toString());
      return;
    }
    alert('3개까지 선택 가능합니다:)');
  };

  return (
    <button
      className={cn(
        'min-w-[40px] flex justify-center items-center px-[10px] py-[8px] gap-[10px] caption-12 rounded-full',
        selected
          ? 'bg-primary-300 text-secondary-900 shadow-tag'
          : 'bg-grey-800 text-grey-300',
      )}
      onClick={handlePillClick}
      {...props}
    >
      {children}
    </button>
  );
}
