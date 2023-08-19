import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import { Fragment } from 'react';

import { Button, Circle, CopyButton } from '@/components';

import { circleContainer, copyButton, title } from './style.css';

function ResultPage() {
  const searchParams = useSearchParams();
  const nickname = searchParams.get('nickname');
  const code = searchParams.get('code') ?? '';
  return (
    <Fragment>
      <h1 className={classNames(title)}>
        {`${nickname}님의\n결과가 궁금하다면?`}
      </h1>
      <div className={classNames(circleContainer)}>
        <Circle
          active
          useLabel
          index={0}
          length={1}
          defaultvalue={3}
          question={{
            category: {
              color: 'FB5563',
              iconUrl: '/heart.png',
              name: '표현력',
            },
            title: '',
            keyword: '표현력',
            questionId: 0,
          }}
        />
      </div>
      <CopyButton className={classNames(copyButton)} code={code} />
      <Button>
        <a
          href='https://keyme.page.link/oym1'
          target='_blank'
          rel='noopener noreferrer'
        >
          앱에서 결과 확인하기
        </a>
      </Button>
    </Fragment>
  );
}

export default ResultPage;
