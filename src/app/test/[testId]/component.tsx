'use client';

import classNames from 'classnames';
import { RESET } from 'jotai/utils';
import { useRouter } from 'next/navigation';
import QueryString from 'qs';
import { Fragment } from 'react';

import { BackButton, Button, Circle, Progress, Question } from '@/components';
import { PAGE_URLS } from '@/constants/urls';
import { useCounter } from '@/hooks';
import { useSubmitTestsMutation } from '@/mutations';
import { useTestsByIdQuery } from '@/quries';
import {
  useQuestionSubmissionAtomValue,
  useUpdateQuestionSubmissionAtomValueByQuestionId,
} from '@/stores/questionSubmissionAtom';
import { useRangeAtom } from '@/stores/rangeAtom';
import { closeWebView, isWebView, sendTestResult } from '@/utils/webview';

import { bottom, button, container, top } from './style.css';

type Props = {
  testId: number;
};

function TestPage({ testId }: Props) {
  const router = useRouter();
  const { data: testsByIdQueryResponse } = useTestsByIdQuery(testId);
  const { mutate } = useSubmitTestsMutation(testId);
  const { questions = [], owner } = testsByIdQueryResponse?.data ?? {};
  const { nickname = '' } = owner ?? {};

  const [currentIndex, { increment, decrement }] = useCounter();
  const currentQuestion = questions[currentIndex];
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === questions.length - 1;

  const [rangeAtomValue, setRangeAtomValue] = useRangeAtom();
  const questionSubmission = useQuestionSubmissionAtomValue();
  const updateQuestionSubmissionAtom =
    useUpdateQuestionSubmissionAtomValueByQuestionId();

  const handleClickBackButton = () => {
    if (isFirstQuestion) {
      closeWebView();
      return;
    }
    decrement();
  };

  const handleClickNextButton = () => {
    if (isLastQuestion) {
      mutate(
        { results: questionSubmission },
        {
          onSuccess: ({ data }) => {
            if (isWebView()) {
              return sendTestResult(data);
            }
            const search = QueryString.stringify({
              nickname,
              code: data.resultCode,
            });
            router.push(PAGE_URLS.TEST_RESULT + '?' + search);
          },
        },
      );
      return;
    }
    if (rangeAtomValue) {
      updateQuestionSubmissionAtom({
        questionId: currentQuestion.questionId,
        score: rangeAtomValue,
      });
      setRangeAtomValue(RESET);
      increment();
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <Fragment>
      {/** 최상단 문제 풀이 진행도 */}
      <Progress current={currentIndex} total={questions.length} />

      <div className={classNames(container)}>
        <div className={classNames(top)}>
          {/** 문제풀이 정도를 나타내는 원 (최대 3개 노출) */}
          {questions
            .slice(currentIndex, currentIndex + 3)
            .map((question, index) => (
              <Circle
                key={question.questionId}
                active={index === 0}
                index={index}
                length={3}
                question={question}
              />
            ))}
        </div>

        <div className={classNames(bottom)}>
          {/** 질문 텍스트 + 레버 */}
          <Question question={currentQuestion} nickname={nickname} />
          {/** 하단 다음 버튼 */}
          <Button
            disabled={rangeAtomValue === undefined}
            className={classNames(button)}
            onClick={handleClickNextButton}
          >
            다음
          </Button>
        </div>
      </div>

      {/** 뒤로가기 버튼 */}
      <BackButton onClick={handleClickBackButton} />
    </Fragment>
  );
}

export default TestPage;
