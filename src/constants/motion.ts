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
