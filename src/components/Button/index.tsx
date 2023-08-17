import classNames from 'classnames';

import { container } from './style.css';

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, className, ...restProps } = props;
  return (
    <button
      role='button'
      className={classNames(container, className)}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
