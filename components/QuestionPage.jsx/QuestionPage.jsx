import { useAula } from '@context/AulaContext'
import { AnimatePresence, motion } from 'framer-motion'
import { QuestionItem } from '@components/QuestionItem/QuestionItem'
import { Reward } from '@components/Reward/Reward'
import { useEffect, useState } from 'react'

import styles from './question.module.css'

const MotionQuestionItem = motion(QuestionItem, { forwardMotionProps: true })

export const QuestionPage = () => {
  const { questionsData, questions, showQuestion } = useAula()

  const [qIndex, setQIndex] = useState(0)
  const [qObj, setQObj] = useState({})

  const qID = parseInt(questions[qIndex])
  const qLength = questions.length

  useEffect(() => {
    questionsData.forEach(item => {
      item.id === qID && setQObj(item)
    })
  }, [qIndex, questions])

  const variants = {
    initial: {
      opacity: 0,
      x: 10
    },
    active: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: -10
    }
  }

  const transition = {
    type: 'just',
    duration: 0.3
  }

  return (
    showQuestion &&
      <motion.section
        className={styles.section}
      >
        <Reward />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
        >
          <MotionQuestionItem
            key={qIndex}
            initial='initial'
            animate='active'
            exit='exit'
            variants={variants}
            transition={transition}
            {...{ qObj, qIndex, setQIndex, qLength, qID }}
          />
        </AnimatePresence>
      </motion.section>
  )
}
