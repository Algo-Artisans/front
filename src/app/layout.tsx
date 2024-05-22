import type { Metadata } from 'next';
import './globals.css';
import QueryClientProviders from '@/components/common/QueryClientProviders';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '모락모락',
  description: '개인과 디자이너의 즐거움을 위한 헤어 서비스, 모락모락',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProviders>
      <html lang="en">
        <body className="relative min-h-[100dvh] w-full max-w-[480px] mx-auto overscroll-y-none overscroll-x-none scrollbar-hide">
          <Suspense>{children}</Suspense>
        </body>
      </html>
    </QueryClientProviders>
  );
}
