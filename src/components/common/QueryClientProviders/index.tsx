'use client';

import queryClient from '@/app/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

export default function QueryClientProviders({
  children,
}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
