'use client';

import dynamic from 'next/dynamic';

import { Loader } from '@/components';

interface Props {
  params: { testId: number };
}

const Component = dynamic(
  async () => {
    const [moduleExports] = await Promise.all([
      import('./component'),
      new Promise((resolve) => setTimeout(resolve, 500)),
    ]);
    return moduleExports;
  },
  {
    loading: () => <Loader />,
  },
);

function Page({ params }: Props) {
  return <Component testId={params.testId} />;
}

export default Page;
