import { useMutation } from '@tanstack/react-query';

import { postSubmitTests } from '@/apis/requesters';
import { PostSubmitTestsBody, Test } from '@/apis/types';

export function useSubmitTestsMutation(testId: Test['testId']) {
  return useMutation({
    mutationFn: (body: PostSubmitTestsBody) => postSubmitTests(testId, body),
  });
}
