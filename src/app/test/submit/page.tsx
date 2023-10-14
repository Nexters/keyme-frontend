'use client';

import dynamic from 'next/dynamic';

const Component = dynamic(() => import('./component'));

function Page() {
  return <Component />;
}

export default Page;
