import classNames from 'classnames';

import { Question } from '@/apis/types';
import Range from '@/components/Range';

import { container, seperator, text } from './style.css';

interface Props {
  question: Question;
}

function Question({ question }: Props) {
  const { title, category } = question;
  const { color } = category;
  return (
    <div className={classNames(container)}>
      <p className={classNames(text)}>{title}</p>
      <hr className={classNames(seperator)} />
      <Range color={color} />
    </div>
  );
}

export default Question;
