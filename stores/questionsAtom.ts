import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import { QuestionSubmission } from '@/apis/types';

const questionsAtom = atomWithReset<QuestionSubmission[]>([]);

export const useQuestionsAtom = () => useAtom(questionsAtom);

export const useQuestionsAtomValue = () => useAtomValue(questionsAtom);

export const useSetQuestionsAtom = () => useSetAtom(questionsAtom);

export const useResetQuestionsAtom = () => useResetAtom(questionsAtom);

export const useUpdateQuestionsAtomValueByQuestionId = () => {
  const setQuestionsAtom = useSetQuestionsAtom();

  return (questionSubmission: QuestionSubmission) =>
    setQuestionsAtom((prev) => {
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
