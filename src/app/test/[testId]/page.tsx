'use client';

import { Suspense } from '@suspensive/react';

import { Loader } from '@/components';

import TestPage from './component';

interface Props {
  params: { testId: number };
}

function Page({ params }: Props) {
  return (
    <Suspense fallback={<Loader />}>
      <TestPage testId={params.testId} />
    </Suspense>
  );
}

export default Page;
