'use client';

import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider as BaseQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { useState } from 'react';

const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      suspense: true,
      networkMode: 'always',
    },
    mutations: {
      networkMode: 'always',
    },
  },
};

function QueryClientProvider({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient(queryClientOption));
  return (
    <BaseQueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </BaseQueryClientProvider>
  );
}

export { QueryClientProvider };
