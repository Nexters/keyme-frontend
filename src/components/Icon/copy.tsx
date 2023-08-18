function CopyIcon(props: React.HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_3823_1965)'>
        <path
          d='M17 2.5H4C3.17157 2.5 2.5 3.17157 2.5 4V17C2.5 17.8284 3.17157 18.5 4 18.5H17C17.8284 18.5 18.5 17.8284 18.5 17V4C18.5 3.17157 17.8284 2.5 17 2.5Z'
          stroke='white'
          strokeWidth='2'
          strokeLinejoin='round'
        />
        <path
          d='M22.0002 6.50098V21C22.0002 21.5523 21.5525 22 21.0002 22H6.50195'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M6.5 10.2429L9.49983 13.0054L14.5 7.85962'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_3823_1965'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export { CopyIcon };
