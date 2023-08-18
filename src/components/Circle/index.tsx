'use client';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment } from 'react';

import { Question } from '@/apis/types';
import { useRangeAtomValue } from '@/stores/rangeAtom';

import {
  backgroundCircle,
  container,
  imageContainer,
  valueCircle,
} from './styles.css';

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
        initial={{ x: '-50%', y: '-30%' }}
        animate={{ x: '-50%', y: `calc(-50% + ${25 * index}px)` }}
        exit={{ x: '-50%', y: '30%' }}
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
            <div className={classNames(imageContainer)}>
              <Image
                layout='fill'
                objectFit='contain'
                sizes='48px'
                alt={title}
                src={iconUrl}
              />
            </div>
          </Fragment>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Circle;
