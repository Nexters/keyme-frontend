import { request, resultify } from './axios';
import { ApiResponse, PostSubmitTestsBody, Test, TestResult } from './types';
import { URLS } from './urls';

export function getTestsById(testId: Test['testId']) {
  return resultify<ApiResponse<Test>>(request.get(URLS.testsById(testId)));
}

export function postSubmitTests(
  testId: Test['testId'],
  body: PostSubmitTestsBody,
) {
  const accessToken = window.navigator.userAgent.split('KEYME_')[1] ?? '';
  return resultify<ApiResponse<TestResult>>(
    request.post(URLS.submitTests(testId), body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  );
}
