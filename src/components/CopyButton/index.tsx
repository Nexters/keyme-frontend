import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CopyIcon } from '@/components/Icon';

import { codeText, container, copyIcon } from './style.css';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  code: string;
}

function CopyButton(props: Props) {
  const { code, className, onClick, ...restProps } = props;
  return (
    <CopyToClipboard text={code}>
      <button
        role='button'
        className={classNames(container, className)}
        onClick={(event) => {
          onClick?.(event);
        }}
        {...restProps}
      >
        <span>결과 코드 복사하기</span>
        <span className={classNames(codeText)}>
          {code}
          <CopyIcon className={classNames(copyIcon)} />
        </span>
      </button>
    </CopyToClipboard>
  );
}

export default CopyButton;
