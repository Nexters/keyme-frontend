'use client';

import { Suspense } from '@suspensive/react';
import dynamic from 'next/dynamic';

import { Loader } from '@/components';

const Component = dynamic(() => import('./component'));

function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
}

export default Page;
