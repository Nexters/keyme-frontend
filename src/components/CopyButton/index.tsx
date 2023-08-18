import classNames from 'classnames';

import { CopyIcon } from '@/components/Icon';

import { codeText, container, copyIcon } from './style.css';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  code: string;
}

function CopyButton(props: Props) {
  const { code, className, ...restProps } = props;
  return (
    <button
      role='button'
      className={classNames(container, className)}
      {...restProps}
    >
      <span>결과 코드 복사하기</span>
      <span className={classNames(codeText)}>
        {code}
        <CopyIcon className={classNames(copyIcon)} />
      </span>
    </button>
  );
}

export default CopyButton;
