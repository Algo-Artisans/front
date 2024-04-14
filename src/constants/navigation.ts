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
    key: 'user',
    name: 'AiCam',
    // TODO: 파이썬 사이트로 url 변경
    route: '/user',
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
    route: '/mypage',
    routeName: '마이페이지',
  },
];
