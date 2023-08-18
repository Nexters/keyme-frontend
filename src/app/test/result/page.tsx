'use client';

import { Suspense } from '@suspensive/react';

import ResultPage from './component';

function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResultPage />
    </Suspense>
  );
}

export default Page;
