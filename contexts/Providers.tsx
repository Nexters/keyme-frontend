'use client';

import { Provider } from 'jotai';

import { ApiErrorBoundary, GlobalErrorBoundray } from '@/components';

import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';

function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <Provider>
        <GlobalErrorBoundray>
          <QueryClientProvider>
            <ApiErrorBoundary>{children}</ApiErrorBoundary>
          </QueryClientProvider>
        </GlobalErrorBoundray>
      </Provider>
    </ThemeProvider>
  );
}

export default Providers;
