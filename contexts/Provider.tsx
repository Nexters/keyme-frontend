import {
  ApiErrorBoundary,
  GlobalErrorBoundray,
} from '@/components/ErrorBoundary';

import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';

function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <GlobalErrorBoundray>
        <QueryClientProvider>
          <ApiErrorBoundary>{children}</ApiErrorBoundary>
        </QueryClientProvider>
      </GlobalErrorBoundray>
    </ThemeProvider>
  );
}

export default Providers;
