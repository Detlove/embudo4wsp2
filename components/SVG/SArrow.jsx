import { forwardRef } from 'react'

const SArrow = forwardRef((props, ref) => (
  <svg
    width={20}
    height={20}
    fill='none'
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g>
      <path
        d='m.266 6.097 9.091 9.091a.909.909 0 0 0 1.286 0l9.09-9.09a.909.909 0 1 0-1.285-1.286L10 13.26 1.552 4.812a.906.906 0 0 0-1.286 0 .91.91 0 0 0 0 1.285Z'
      />
    </g>
  </svg>
))

export default SArrow
