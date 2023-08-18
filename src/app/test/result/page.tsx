'use client';

import { Suspense } from '@suspensive/react';

import { Loader } from '@/components';

import ResultPage from './component';

function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <ResultPage />
    </Suspense>
  );
}

export default Page;
