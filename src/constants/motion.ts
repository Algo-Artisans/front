import { Variants } from 'framer-motion';

export const showTextVariants: Variants = {
  initial: { opacity: 0, y: '20%' },
  exit: { opacity: 0, y: '-10%' },
  animate: {
    y: ['20%', '0%'],
    transition: {
      duration: 1,
    },
  },
  opacity: { opacity: 1, transition: { duration: 0.2 } },
};

export const showCardVariants: Variants = {
  initial: { opacity: 0, y: '10%' },
  exit: { opacity: 0, y: '-10%' },
  animate: {
    y: ['10%', '0%'],
    transition: {
      duration: 1,
    },
  },
  opacity: { opacity: 1, transition: { duration: 0.5 } },
};

export const rotateButtonVariants: Variants = {
  active: { rotate: [0, -45] },
  inactive: { rotate: 0 },
};

export const openHorizontalButtonItem: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export const openHorizontalButtonContainer: Variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};
