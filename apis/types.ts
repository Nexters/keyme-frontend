export interface OwnerProfile {
  /** */
  memberId: number;
  /** */
  nickname: string;
  /** */
  thumbnailUrl: string;
}

export interface Rate {
  /** */
  averageRate: number;
  /** */
  matchRate: number;
}

export interface Test {
  headQuestion: string;
  /** 객체 내 프로필 정보Test 객체 내 프로필 정보 */
  ownerProfile: OwnerProfile;
  /** 객체 내 Rate 정보Test 객체 내 Rate 정보 */
  result: Rate;
  /** */
  solvedMemberCount: number;
  /** */
  testId: number;
}

export type TestType = 'MYSOLVED' | 'SOLVED' | 'UNSOLVED';

export type DailyTest = Test;

export interface TestResult {
  /** 테스트 제출자와의 일치율(MMVP에서는 없음) (example: 87.7) */
  matchRate: number;
  /** 익명유저의 제출에서만 존재(6자리) (example: Wqa3dk) */
  resultCode: string;
  /**  */
  testResultId: number;
}

export interface QuestionSubmission {
  questionId: number;
  score: number;
}

export interface PostSubmitTestsBody {
  results: QuestionSubmission[];
}

export interface ApiResponse<T> {
  data: T;
  /** 메시지 (example: SUCCESS) */
  message: string;
  /** HTTP 상태코드 (example: 200) */
  state: string;
}
