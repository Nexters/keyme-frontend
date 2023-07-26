'use client';

import { ErrorBoundary } from '@suspensive/react';
import { usePathname } from 'next/navigation';

type Props = React.PropsWithChildren;

function GlobalErrorBoundary({ children }: Props) {
  const pathname = usePathname();
  return (
    <ErrorBoundary resetKeys={[pathname]} fallback={() => <div>ERROR</div>}>
      {children}
    </ErrorBoundary>
  );
}

export default GlobalErrorBoundary;
