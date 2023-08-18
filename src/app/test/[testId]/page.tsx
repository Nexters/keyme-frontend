'use client';

import { Suspense } from '@suspensive/react';
import { lazy } from 'react';

import { Loader } from '@/components';

interface Props {
  params: { testId: number };
}

const Component = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import('./component'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]);
  return moduleExports;
});

function Page({ params }: Props) {
  return (
    <Suspense fallback={<Loader />}>
      <Component testId={params.testId} />
    </Suspense>
  );
}

export default Page;
