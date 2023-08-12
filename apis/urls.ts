import { Test } from './types';

export const URLS = {
  /** GET: testId 기반으로 테스트 가져오기 */
  testsById: (id: Test['testId']) => `/tests/${id}`,
  /** POST: 테스트 제출 */
  submitTests: (id: Test['testId']) => `/tests/${id}/submit`,
} as const;
