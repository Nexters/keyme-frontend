'use client';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';

import { Question } from '@/apis/types';
import { panchang } from '@/app/font';
import { useRangeAtomValue } from '@/stores/rangeAtom';
import { preload } from '@/utils/image';

import {
  backgroundCircle,
  container,
  iconContainer,
  imageContainer,
  label,
  questionMark,
  valueCircle,
} from './styles.css';

type Props = {
  active: boolean;
  index: number;
  length: number;
  question: Question;
  defaultvalue?: number;
  useLabel?: boolean;
};

const opacity = [0.7, 0.2, 0.1] as const;

function Circle({
  index,
  length,
  question,
  active,
  defaultvalue = 0,
  useLabel = false,
}: Props) {
  const range = useRangeAtomValue() ?? defaultvalue;
  const weight = length - index;
  const currentOpacity = opacity[index % opacity.length];
  const backgroundCircleColor = `rgba(255, 255, 255, ${currentOpacity})`;
  const {
    category: { iconUrl, color, name },
    title,
    questionId,
  } = question;

  useEffect(() => {
    preload(iconUrl);
  }, [iconUrl]);

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
            border: `1px solid ${backgroundCircleColor}`,
            background: backgroundCircleColor,
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
            <div className={classNames(iconContainer)}>
              <div className={classNames(imageContainer)}>
                <Image
                  fill
                  quality={80}
                  sizes='48px'
                  alt={title}
                  src={iconUrl}
                />
              </div>
              {useLabel && (
                <p className={classNames(label)}>
                  {name}
                  <span
                    className={classNames(panchang.className, questionMark)}
                  >
                    ?
                  </span>
                </p>
              )}
            </div>
          </Fragment>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Circle;
