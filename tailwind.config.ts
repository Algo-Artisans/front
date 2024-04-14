import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      system: {
        kakaoBrown: '#371D1E',
        kakaoYellow: '#FAE100',
      },
      primary: {
        500: '#0FD417',
        300: '#61FF67',
      },
      secondary: {
        900: '#11002B',
        700: '#21194B',
        500: '#0F025E',
        300: '#2A1991',
      },
      grey: {
        900: '#192028',
        800: '#3A3A3A',
        500: '#8C8C8C',
        300: '#D9D9D9',
      },
      error: {
        400: '#FF5E5E',
      },
    },
    zIndex: { header: '300', nav: '400', modal: '500' },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        button: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        tag: '0px 0px 10px rgba(152,227,155, 1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
