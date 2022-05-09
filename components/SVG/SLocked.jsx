const SLocked = (props) => (
  <svg
    width={30}
    height={30}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill='#000' />
    <g>
      <path
        d='M21.125 14.25h-1.25v-1.875a4.375 4.375 0 1 0-8.75 0v1.875h-1.25a.625.625 0 0 0-.625.625V20.5a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5v-5.625a.624.624 0 0 0-.625-.625ZM15.5 20.188a1.563 1.563 0 1 1 0-3.126 1.563 1.563 0 0 1 0 3.125Zm1.875-5.938h-3.75v-1.875a1.875 1.875 0 1 1 3.75 0v1.875Z'
        fill='#fff'
      />
    </g>
  </svg>
)

export default SLocked
