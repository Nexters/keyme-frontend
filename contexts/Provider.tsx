import {
  ApiErrorBoundary,
  GlobalErrorBoundray,
} from '@/components/ErrorBoundary';

import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';

function Providers({ children }: React.PropsWithChildren) {
  return (
    <GlobalErrorBoundray>
      <ThemeProvider>
        <QueryClientProvider>
          <ApiErrorBoundary>{children}</ApiErrorBoundary>
        </QueryClientProvider>
      </ThemeProvider>
    </GlobalErrorBoundray>
  );
}

export default Providers;
