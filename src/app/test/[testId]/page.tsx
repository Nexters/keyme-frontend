'use client';

import { Suspense } from '@suspensive/react';
import dynamic from 'next/dynamic';

import { Loader } from '@/components';

interface Props {
  params: { testId: number };
}

const Component = dynamic(async () => {
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
