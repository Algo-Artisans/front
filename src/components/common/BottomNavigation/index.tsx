'use client';

import Icon from '../Icon';

import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/constants/navigation';

export default function BottomNavigation({
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) {
  const currentPath = usePathname();
  const slicedPathname = currentPath.slice(1).split('/')[0];

  return (
    <nav
      className={cn(
        'h-[70px] w-full flex justify-around items-center gap-[20px] p-[12px] fixed bottom-0 bg-white z-nav',
        className,
        { ...restProps },
      )}
    >
      {NAVIGATION.map((item) => (
        <Link key={item.key} href={item.route}>
          <div
            className={cn(
              'flex flex-col items-center justify-center',
              item.key === slicedPathname
                ? 'fill-primary-500'
                : 'fill-secondary-900',
            )}
          >
            <Icon
              iconName={item.name}
              className={cn(
                item.key === currentPath
                  ? 'fill-primary-500'
                  : 'fill-secondary-900',
              )}
            />
            <p
              className={cn(
                'caption-12',
                item.key === currentPath
                  ? 'text-primary-500'
                  : 'text-seconday-500',
              )}
            >
              {item.routeName}
            </p>
          </div>
        </Link>
      ))}
    </nav>
  );
}
