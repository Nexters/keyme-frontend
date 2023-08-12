import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import { QuestionSubmission } from '@/apis/types';

const questionSubmissionAtom = atomWithReset<QuestionSubmission[]>([]);

export const useQuestionSubmissionAtom = () => useAtom(questionSubmissionAtom);

export const useQuestionSubmissionAtomValue = () =>
  useAtomValue(questionSubmissionAtom);

export const useSetQuestionSubmissionAtom = () =>
  useSetAtom(questionSubmissionAtom);

export const useResetQuestionSubmissionAtom = () =>
  useResetAtom(questionSubmissionAtom);

export const useUpdateQuestionSubmissionAtomValueByQuestionId = () => {
  const setQuestionSubmissionAtom = useSetQuestionSubmissionAtom();

  return (questionSubmission: QuestionSubmission) =>
    setQuestionSubmissionAtom((prev) => {
      // UPDATE
      if (
        prev.find(
          (prevQuestionSubmission) =>
            prevQuestionSubmission.questionId === questionSubmission.questionId,
        )
      ) {
        return prev.map((prevQuestionSubmission) => {
          if (
            prevQuestionSubmission.questionId === questionSubmission.questionId
          ) {
            return questionSubmission;
          }
          return prevQuestionSubmission;
        });
      }

      // CREATE
      return [...prev, questionSubmission];
    });
};
