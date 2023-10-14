import classNames from 'classnames';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { ResultIcon } from '@/components';
import { PAGE_URLS } from '@/constants/urls';

import { container, content, icon, text } from './styles.css';

function SubmitPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.replace(PAGE_URLS.TEST_RESULT + '?' + searchParams.toString());
    }, 1_000);
    return () => {
      clearTimeout(timerId);
    };
  }, [router, searchParams]);

  return (
    <div className={classNames(container)}>
      <div className={classNames(content)}>
        <div className={classNames(icon)}>
          <ResultIcon />
        </div>
        <p className={classNames(text)}>테스트가 제출되었어요!</p>
      </div>
    </div>
  );
}

export default SubmitPage;
