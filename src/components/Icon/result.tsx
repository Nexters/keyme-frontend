function ResultIcon(props: React.HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      width='85'
      height='75'
      viewBox='0 0 85 75'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='20.5' cy='20.5' r='20.5' fill='#777CFF' />
      <path
        d='M14 19C29.6485 28.2729 57.0138 47.1388 55.7293 58.1205C54.2832 70.4836 36.8172 68.0195 40.081 53.774C43.3449 39.5284 59.3768 28.5933 70.2436 31.636C81.1105 34.6787 93.9808 54.2086 67.0309 73.3343'
        stroke='#FFEFB1'
        strokeWidth='2'
      />
    </svg>
  );
}

export { ResultIcon };
