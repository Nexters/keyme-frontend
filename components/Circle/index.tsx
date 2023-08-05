'use client';

import { motion } from 'framer-motion';

import { backgroundCircle, container, valueCircle } from './styles.css';

interface Props {
  value: number;
}

function Circle({ value }: Props) {
  const size = Math.max(50 * value, 20);
  return (
    <div className={`${container}`}>
      <div className={`${backgroundCircle}`} />
      <motion.div
        initial={false}
        className={`${valueCircle}`}
        animate={{ width: size, height: size }}
      />
    </div>
  );
}

export default Circle;
