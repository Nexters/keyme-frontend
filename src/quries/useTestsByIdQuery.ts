import { useQuery } from '@tanstack/react-query';

import { Test } from '@/apis/types';

import { queryKeys } from './queryKeys';

export function useTestsByIdQuery(testId: Test['testId']) {
  return useQuery({ ...queryKeys.tests.byId(testId) });
}
