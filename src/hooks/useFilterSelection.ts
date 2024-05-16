'use client';

import { FILTERS } from '@/constants/filters';
import { useState } from 'react';

export const useFilterSelection = () => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [permIsSelected, setPermIsSelected] = useState<boolean[]>(
    Array(FILTERS.length).fill(false),
  );
  const [cutIsSelected, setCutIsSelected] = useState<boolean[]>(
    Array(FILTERS.length).fill(false),
  );
  const [selectedSortIndex, setSelectedSortIndex] = useState<number>(2);

  const updateSelectedStyles = (styleName: string) => {
    if (selectedStyles.includes(styleName)) {
      setSelectedStyles(selectedStyles.filter((style) => style !== styleName));
    } else {
      setSelectedStyles([...selectedStyles, styleName]);
    }
  };

  return {
    selectedStyles,
    permIsSelected,
    cutIsSelected,
    selectedSortIndex,
    setPermIsSelected,
    setCutIsSelected,
    setSelectedStyles,
    setSelectedSortIndex,
    updateSelectedStyles,
  };
};
