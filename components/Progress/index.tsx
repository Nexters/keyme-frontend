'use client';

import classNames from 'classnames';

import { active, bar, container } from './style.css';

interface Props {
  current: number;
  total: number;
}

function Progress({ current, total }: Props) {
  return (
    <ul className={classNames(container)}>
      {new Array(total).fill(0).map((_, index) => (
        <li
          key={index}
          className={classNames(bar, current === index && active)}
        />
      ))}
    </ul>
  );
}

export default Progress;
