import { useState, useEffect } from 'react'
import SPeople from '@components/SVG/SPeople'

import styles from './counter.module.css'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const min = 121
  const max = 139

  useEffect(() => {
    counter === 0 && setCounter(Math.floor(Math.random() * (min - max) + max))

    const interval = setInterval(() => {
      setCounter(Math.floor(Math.random() * (min - max) + max))
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.section}>
      <SPeople className={styles.speople} />
      <span className={styles.number} style={{ '--vwrs': counter }} />
    </div>
  )
}
