import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { Button, Circle } from '@/components';
import { MAX } from '@/constants/range';

import { circleContainer, container, title } from './style.css';

const MIN = 3;

function ResultPage() {
  const [value, setValue] = useState(MIN);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerId.current = setTimeout(function tick() {
      setValue((prev) => Math.max((prev + 1) % (MAX + 1), MIN));
      timerId.current = setTimeout(tick, 1000);
    }, 1000);

    return () => {
      timerId.current && clearTimeout(timerId.current);
    };
  }, []);

  return (
    <div className={classNames(container)}>
      <h1 className={classNames(title)}>{'나도 내 성격이\n궁금하다면?'}</h1>
      <div className={classNames(circleContainer)}>
        <Circle
          active
          useLabel
          index={0}
          length={1}
          defaultvalue={value}
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
      <Button>
        <a
          href='https://keyme.page.link/oym1'
          target='_blank'
          rel='noopener noreferrer'
        >
          키미에서 알아보기
        </a>
      </Button>
    </div>
  );
}

export default ResultPage;
