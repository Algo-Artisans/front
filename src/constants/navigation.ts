import AiCameraIcon from '../../public/assets/icons/ai_camera_35.svg';
import HomeIcon from '../../public/assets/icons/home_35.svg';
import ProfileIcon from '../../public/assets/icons/my_profile_35.svg';

import { ReactNode } from 'react';

let portfolioId: string | null = null;

if (typeof window !== 'undefined') {
  portfolioId = localStorage.getItem('portfolioId');
}

export interface NavigationItemType {
  icon: ReactNode;
  key: string;
  name: string;
  route: string;
  routeName: string;
}

export const NAVIGATION: NavigationItemType[] = [
  {
    icon: AiCameraIcon,
    key: 'user',
    name: 'AiCam',
    route: 'https://111.229.192.30:5000',
    routeName: 'AI 헤어',
  },
  {
    icon: HomeIcon,
    key: 'designerList',
    name: 'Home',
    route: '/designerList',
    routeName: '홈',
  },
  {
    icon: ProfileIcon,
    key: 'mypage',
    name: 'MyPage',
    route: `/mypage?portfolioId=${portfolioId}`,
    routeName: '마이페이지',
  },
];
