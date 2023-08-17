import classNames from 'classnames';

import { button } from './style.css';

function BackButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={classNames(button, props.className)}>
      <svg
        width='12'
        height='22'
        viewBox='0 0 12 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 21L1 11L11 1'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}

export default BackButton;
