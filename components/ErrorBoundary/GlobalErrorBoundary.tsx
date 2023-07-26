'use client';

import { ErrorBoundary } from '@suspensive/react';
import { usePathname } from 'next/navigation';

import { container } from '@/styles/layout.css';

type Props = React.PropsWithChildren;

function GlobalErrorBoundary({ children }: Props) {
  const pathname = usePathname();
  return (
    <ErrorBoundary
      resetKeys={[pathname]}
      fallback={() => <div className={`${container}`}>ERROR</div>}
    >
      {children}
    </ErrorBoundary>
  );
}

export default GlobalErrorBoundary;
