import { AnimatePresence, motion } from 'framer-motion'
import { useApp } from '@context/AppContext'

import styles from './transition.module.css'

export const Transition = () => {
  const { transition: { show, func }, setTransition } = useApp()

  const variants = {
    initial: {
      height: 0,
      opacity: 0
    },
    active: {
      height: '50%',
      opacity: 1
    }
  }
  const trProperties = {
    type: 'just',
    duration: 0.8
  }

  const handleAnimation = (a) => {
    if (a === 'active') {
      func()
      setTimeout(() => {
        setTransition({ show: false, func: () => {} })
      }, 500)
    }
  }

  return (
    <AnimatePresence>
      {
        show &&
          <section className={styles.section}>
            <motion.div
              className={styles.top}
              initial='initial'
              animate='active'
              exit='initial'
              variants={variants}
              transition={trProperties}
              onAnimationComplete={handleAnimation}
            >
              <img src='/img/top_transition.png' className={styles.top_img} />
            </motion.div>
            <motion.div
              className={styles.bottom}
              initial='initial'
              animate='active'
              exit='initial'
              variants={variants}
              transition={trProperties}
            >
              <img src='/img/bottom_transition.png' className={styles.bottom_img} />
            </motion.div>
          </section>
      }
    </AnimatePresence>
  )
}
