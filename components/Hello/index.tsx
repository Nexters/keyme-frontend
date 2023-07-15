'use client';

import * as Either from '@effect/data/Either';
import { pipe } from '@effect/data/Function';
import { useState } from 'react';

import { container } from './styles.css';

function Hello() {
  const [is, setIs] = useState(false);
  const value = pipe(
    is,
    (is) => (is ? Either.right('Hello World!') : Either.left('World Hello!')),
    Either.merge,
  );
  const toggle = () => setIs((prev) => !prev);

  return (
    <div className={`${container}`}>
      <p>{value}</p>
      <button onClick={toggle}>TOGGLE</button>
    </div>
  );
}

export default Hello;
