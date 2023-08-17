'use client';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment } from 'react';

import { Question } from '@/apis/types';
import { useRangeAtomValue } from '@/stores/rangeAtom';

import { backgroundCircle, container, image, valueCircle } from './styles.css';

type Props = {
  active: boolean;
  index: number;
  length: number;
  question: Question;
};

function Circle({ index, length, question, active }: Props) {
  const range = useRangeAtomValue() ?? 0;
  const weight = length - index;
  const ratio = weight / length;
  const {
    category: { iconUrl, color },
    title,
    questionId,
  } = question;
  return (
    <AnimatePresence>
      <motion.div
        key={questionId}
        className={classNames(container)}
        style={{ zIndex: weight }}
        initial={{ x: '-50%', y: -100 }}
        animate={{ x: '-50%', y: 85 + 25 * index }}
        exit={{ x: '-50%', y: 100 }}
      >
        <div
          className={classNames(backgroundCircle)}
          style={{
            border: `1px solid rgba(255, 255, 255, ${0.7 * ratio})`,
            background: `rgba(255, 255, 255, ${0.7 * ratio})`,
          }}
        />
        {active && (
          <Fragment>
            <motion.div
              initial={false}
              style={{ background: `#${color} ` }}
              className={classNames(valueCircle)}
              animate={{ transform: `scale(${range / 5})` }}
              exit={{ top: -100 }}
            />
            <Image
              className={classNames(image)}
              width={48}
              height={48}
              alt={title}
              src={iconUrl}
            />
          </Fragment>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Circle;
