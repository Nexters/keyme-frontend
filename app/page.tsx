import { Suspense } from 'react';

import { Range } from '@/components';

function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Range />
    </Suspense>
  );
}

export default Page;
