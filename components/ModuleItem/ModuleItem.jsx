import { useAula } from '@context/AulaContext'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SPlay from '@components/SVG/SPlay'
import SArrow from '@components/SVG/SArrow'
import SLocked from '@components/SVG/SLocked'

import styles from './moduleitem.module.css'

const MotionArrow = motion(SArrow)

export const ModuleItem = ({ module, mIndex }) => {
  const { lessons, title, mStatus } = module

  const { nowPlaying: { lessonN, moduleN }, safeChangeNowPlaying } = useAula()

  const [isOpen, setIsOpen] = useState(mIndex === 0)

  const bottomVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      y: 0
    },
    close: {
      height: '0',
      opacity: 0,
      y: -15
    }
  }
  const arrowVariants = {
    open: {
      rotate: '180deg'
    },
    close: {
      rotate: 0
    }
  }

  const ModuleTransition = {
    duration: 0.5,
    type: 'tween'
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.top}
        onClick={toggleOpen}
      >
        {
          mStatus === 'unlocked'
            ? <SPlay
                className={`${styles.splay} ${
                  mIndex === moduleN
                  ? styles.splay_active
                  : ''
                }`}
              />
            : <SLocked
                className={styles.hola}
              />
        }
        <h4 className={styles.title}>{mIndex + 1} | {title}</h4>
        <MotionArrow
          className={styles.arrow}
          initial={false}
          animate={isOpen ? 'open' : 'close'}
          variants={arrowVariants}
          transition={ModuleTransition}
        />
      </div>
      <motion.div
        className={styles.bottom}
        initial={false}
        animate={isOpen ? 'open' : 'close'}
        variants={bottomVariants}
        transition={ModuleTransition}
      >
        <ul>
          {
            lessons.map((lesson, lIndex) => {
              const isLessonActive = (
                moduleN === mIndex && lessonN === lIndex
              )
              return (
                <li
                  key={`${mIndex}.${lIndex}li`}
                  className={isLessonActive ? styles.active : ''}
                  onClick={() => {
                    safeChangeNowPlaying(lIndex, mIndex)
                  }}
                >
                  <strong>
                    {`${mIndex + 1}.${lIndex + 1}`}
                  </strong>
                  {lesson.title}
                </li>
              )
            })
          }
        </ul>
      </motion.div>
    </div>
  )
}
