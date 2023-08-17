import classNames from 'classnames';

import Button from '@/components/Button';
import { container } from '@/styles/layout.css';

type Props = {
  error: Error;
  reset: VoidFunction;
};

function ApiErrorFallback({ error, reset }: Props) {
  return (
    <div className={classNames(container)}>
      <h1 style={{ marginBottom: 20 }}>{error.message}</h1>
      <Button onClick={reset}>RESET</Button>
    </div>
  );
}

export default ApiErrorFallback;
