import { QueryClientProvider } from './QueryClientProvider';
import { ThemeProvider } from './ThemeProvider';

function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}

export default Providers;
