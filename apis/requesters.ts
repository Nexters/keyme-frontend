import { request, resultify } from './axios';
import { ApiResponse, PostSubmitTestsBody, Test, TestResult } from './types';
import { URLS } from './urls';

export function getTestsById(testId: Test['testId']) {
  return resultify(request.get<ApiResponse<Test>>(URLS.testsById(testId)));
}

export function postSubmitTests(
  testId: Test['testId'],
  body: PostSubmitTestsBody,
) {
  return resultify(
    request.post<ApiResponse<TestResult>>(URLS.submitTests(testId), { body }),
  );
}
