'use client';

import * as Either from '@effect/data/Either';
import { pipe } from '@effect/data/Function';

import { useTheme } from '@/hooks/useTheme';

import { button, container } from './styles.css';

function Hello() {
  const { theme, toggleTheme } = useTheme();

  const value = pipe(
    theme,
    (is) => (is ? Either.right('Dark Mode') : Either.left('Light Mode')),
    Either.merge,
  );

  return (
    <div className={`${container}`}>
      <button className={`${button}`} onClick={toggleTheme}>
        {value}
      </button>
    </div>
  );
}

export default Hello;
