import AiCameraIcon from '../../../../public/assets/icons/ai_camera_35.svg';
import HomeIcon from '../../../../public/assets/icons/home_35.svg';
import ProfileIcon from '../../../../public/assets/icons/my_profile_35.svg';

import { cn } from '@/utils/cn';
interface IconProps {
  iconName: string;
  className: string;
}

export default function Icon({ iconName }: IconProps) {
  const iconComponent = (() => {
    switch (iconName) {
      case 'MyPage':
        return <ProfileIcon className={cn()} />;
      case 'Home':
        return <HomeIcon className={cn()} />;
      case 'AiCam':
        return <AiCameraIcon className={cn()} />;
      default:
        return null;
    }
  })();

  return <>{iconComponent}</>;
}
