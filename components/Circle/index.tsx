'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
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

function getSize(value: number) {
  return 80 * (value - 1);
}

function Circle({ index, length, question, active }: Props) {
  const range = useRangeAtomValue();
  const size = getSize(range);
  const weight = length - index;
  const ratio = weight / length;
  const {
    category: { imageUrl, color },
    title,
  } = question;
  return (
    <div
      className={classNames(container)}
      style={{
        top: `calc(50% - ${25 * weight}px)`,
        zIndex: weight,
      }}
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
            style={{ background: `#${color}` }}
            className={classNames(valueCircle)}
            animate={{ width: size, height: size }}
          />
          <Image className={classNames(image)} alt={title} src={imageUrl} />
        </Fragment>
      )}
    </div>
  );
}

export default Circle;
