'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { useRangeAtomValue } from '@/stores/rangeAtom';

import { backgroundCircle, container, valueCircle } from './styles.css';

type Props = {
  index: number;
  length: number;
};

function getSize(value: number) {
  return 80 * (value - 1);
}

function Circle({ index, length }: Props) {
  const range = useRangeAtomValue();
  const size = getSize(range);
  const weight = length - index;
  const ratio = weight / length;
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
      <motion.div
        initial={false}
        className={classNames(valueCircle)}
        animate={{ width: size, height: size }}
      />
    </div>
  );
}

export default Circle;
