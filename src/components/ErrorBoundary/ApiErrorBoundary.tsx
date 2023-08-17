'use client';

import { ErrorBoundary } from '@suspensive/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

import ApiErrorFallback from './ApiErrorFallback';

type Props = React.PropsWithChildren;

function ApiErrorBoundary({ children }: Props) {
  const { reset } = useQueryErrorResetBoundary();
  const pathname = usePathname();
  return (
    <ErrorBoundary
      onReset={reset}
      resetKeys={[pathname]}
      fallback={(fallbackProps) => <ApiErrorFallback {...fallbackProps} />}
    >
      {children}
    </ErrorBoundary>
  );
}

export default ApiErrorBoundary;
