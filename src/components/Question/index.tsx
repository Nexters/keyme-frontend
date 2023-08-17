import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';

import { Question } from '@/apis/types';
import Range from '@/components/Range';

import { container, seperator, text } from './style.css';

interface Props {
  question: Question;
}

function Question({ question }: Props) {
  const searchParams = useSearchParams();
  const nickname = searchParams.get('nickname') ?? '';
  const { title, category, questionId } = question;
  const { color } = category;
  return (
    <div className={classNames(container)}>
      <p className={classNames(text)}>{nickname + title}</p>
      <hr className={classNames(seperator)} />
      <Range color={color} questionId={questionId} />
    </div>
  );
}

export default Question;
