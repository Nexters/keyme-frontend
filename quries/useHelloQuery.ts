import { useQuery } from '@tanstack/react-query';

import { getHello } from '@/apis/requesters';

import { queryKeys } from './queryKeys';

export function useHelloQuery() {
  return useQuery({ ...queryKeys.hello.all, queryFn: getHello });
}
