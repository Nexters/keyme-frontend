'use client';

import { active, bar, container } from './style.css';

interface Props {
  current: number;
  total: number;
}

function Progress({ current, total }: Props) {
  return (
    <ul className={`${container}`}>
      {new Array(total).fill(0).map((_, index) => (
        <li className={`${bar} ${current === index && active}`} />
      ))}
    </ul>
  );
}

export default Progress;
