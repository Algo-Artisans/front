import AiCameraIcon from '../../public/assets/icons/ai_camera_35.svg';
import HomeIcon from '../../public/assets/icons/home_35.svg';
import ProfileIcon from '../../public/assets/icons/my_profile_35.svg';

import { ReactNode } from 'react';

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
    key: '/aiCam',
    name: 'AiCam',
    route: '/aiCam',
    routeName: 'AI 헤어',
  },
  {
    icon: HomeIcon,
    key: '/',
    name: 'Home',
    route: '/',
    routeName: '홈',
  },
  {
    icon: ProfileIcon,
    key: '/mypage',
    name: 'MyPage',
    route: '/mypage',
    routeName: '마이페이지',
  },
];
