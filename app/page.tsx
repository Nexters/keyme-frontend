import { Suspense } from 'react';

import Hello from '@/components/Hello';

function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Hello />
    </Suspense>
  );
}

export default Page;
