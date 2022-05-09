const SPlay = (props) => (
  <svg
    width={30}
    height={30}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx={15} cy={15} r={10} />
    <path
      d='M15 0C6.715 0 0 6.716 0 15c0 8.285 6.715 15 15 15s15-6.715 15-15c0-8.284-6.715-15-15-15Zm5.9 16.302-8.297 5.727c-1.037.716-1.89.262-1.89-1.008V8.98c0-1.27.853-1.723 1.89-1.007l8.295 5.727c1.036.715 1.038 1.887.003 2.603Z'
    />
  </svg>
)

export default SPlay
