import { createQueryKeyStore } from '@lukemorales/query-key-factory';

import { getTestsById } from '@/apis/requesters';
import { Test } from '@/apis/types';

export const queryKeys = createQueryKeyStore({
  tests: {
    byId: (testId: Test['testId']) => ({
      queryKey: [testId],
      queryFn: () => getTestsById(testId),
    }),
  },
});
