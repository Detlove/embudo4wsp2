import SReturn from '@components/SVG/SReturn'
import { useAula } from '@context/AulaContext'
import { motion } from 'framer-motion'
import { useState, forwardRef } from 'react'

import styles from './questionitem.module.css'

export const QuestionItem = forwardRef(({ qObj, qIndex, setQIndex, qLength, qID }, ref) => {
  if (qObj === null) {
    return null
  }

  const { points, lSetPoints, setShowQuestion, withAulaFade, setPauseVideo, lSetNowPlaying, nextPlaying } = useAula()

  const { options, title, answer } = qObj
  const [liTap, setLiTap] = useState(null)

  const lAddAnsQuestion = (id) => {
    const lsData = window.localStorage.getItem('ansQuestions')
    const lsAnsQ = lsData ? lsData.split(',') : []
    const newArray = [...lsAnsQ, id]
    window.localStorage.setItem('ansQuestions', newArray.join())
  }

  const handleLiClick = (i, isAnswer) => {
    if (liTap === null) {
      setLiTap(i)
      if (isAnswer) {
        lSetPoints(points + 10)
        lAddAnsQuestion(qID)
      }
    }
  }

  const handleButtonClick = () => {
    if (liTap === null) {
      withAulaFade(() => {
        setShowQuestion(false)
        setPauseVideo(false)
      })
    } else {
      const nextQuestion = qIndex + 1
      if (nextQuestion < qLength) {
        setQIndex(nextQuestion)
      } else {
        withAulaFade(() => {
          setShowQuestion(false)
          setPauseVideo(false)
          lSetNowPlaying(nextPlaying)
          setQIndex(0)
        })
      }
    }
  }

  return (
    <section
      className={styles.section}
      ref={ref}
    >
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.options}>
        {
          options.map((option, i) => {
            const isAnswer = i === answer

            return (
              <motion.li
                key={i}
                className={
                  liTap !== null && isAnswer
                    ? styles.correct
                    : liTap === i && !isAnswer
                      ? styles.error
                      : ''
                }
                whileTap={{ scale: 0.985 }}
                onClick={() => handleLiClick(i, isAnswer)}
              >
                {option}
              </motion.li>
            )
          })
        }
      </ul>
      <motion.button
        className={`${styles.button} ${
          liTap === null
            ? styles.btn_return
            : styles.btn_continue
        }`}
        onClick={handleButtonClick}
        whileTap={{ scale: 0.985 }}
      >
        {
          liTap === null
            ? <><SReturn />Volver al aula</>
            : 'Continuar'
        }
      </motion.button>
    </section>
  )
})
