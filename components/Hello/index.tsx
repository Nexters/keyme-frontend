'use client';

import * as Either from '@effect/data/Either';
import { pipe } from '@effect/data/Function';

import { useTheme } from '@/hooks/useTheme';
import { useHelloQuery } from '@/quries/useHelloQuery';

import { button, container } from './styles.css';

function Hello() {
  const { isDark, toggleTheme } = useTheme();
  const { data } = useHelloQuery();

  const value = pipe(
    isDark,
    (is) => (is ? Either.right('Dark Mode') : Either.left('Light Mode')),
    Either.merge,
  );

  return (
    <div className={`${container}`}>
      <button className={`${button}`} onClick={toggleTheme}>
        {value}
        {JSON.stringify(data)}
      </button>
    </div>
  );
}

export default Hello;
