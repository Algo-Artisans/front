import { createContext, useState, useContext, ReactNode } from 'react';

interface DropDownContextProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  selectedItem: string | null;
  setSelectedItem: (value: string) => void;
}

const DropDownContext = createContext<DropDownContextProps | null>(null);

interface DropDownContainerProps {
  children: ReactNode;
}

export function DropDownContainer({ children }: DropDownContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | 'null'>('여자');

  return (
    <DropDownContext.Provider
      value={{ isOpen, setIsOpen, selectedItem, setSelectedItem }}
    >
      {children}
    </DropDownContext.Provider>
  );
}

export function useDropDownContext() {
  const context = useContext(DropDownContext);

  if (!context) {
    throw new Error(
      'useDropDownContext must be used within a DropDownContainer',
    );
  }

  return context;
}
