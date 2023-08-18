export interface Profile {
  /** */
  memberId: number;
  /** */
  nickname: string;
  /** */
  thumbnailUrl: string;
}

export interface Category {
  /** 카테고리 색상(헥사코드) */
  color: string;
  /** 카테고리 아이콘 url */
  iconUrl: string;
  /** 카테고리 이름 */
  name: string;
}

export interface Question {
  /** 카테고리 정보 */
  category: Category;
  /** 질문 내용 (example: 불의를 보면 참지 않는다) */
  title: string;
  /** 질문 내용을 한 단어로 축약 표현 (example: 참군인) */
  keyword: string;
  /**  */
  questionId: number;
}

export interface Test {
  /** 객체 내 프로필 정보Test 객체 내 프로필 정보 */
  owner: Profile;
  /** Question 정보 응답객체 */
  questions: Question[];
  /** */
  solvedCount: number;
  /** */
  testId: number;
  /** */
  testResultId: number;
  /** */
  title: number;
}

export type TestType = 'MYSOLVED' | 'SOLVED' | 'UNSOLVED';

export interface TestResult {
  /** 테스트 제출자와의 일치율(MMVP에서는 없음) (example: 87.7) */
  matchRate: number;
  /** 익명유저의 제출에서만 존재(6자리) (example: Wqa3dk) */
  resultCode: string;
  /**  */
  testResultId: number;
}

export interface QuestionSubmission {
  /** */
  questionId: number;
  /** */
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
  code: number;
}
