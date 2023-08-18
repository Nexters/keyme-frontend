'use client';

import { Suspense } from '@suspensive/react';
import { useSearchParams } from 'next/navigation';

function Page() {
  const searchParams = useSearchParams();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>{searchParams.get('nickname')}</div>
      <div>{searchParams.get('code')}</div>
    </Suspense>
  );
}

export default Page;
