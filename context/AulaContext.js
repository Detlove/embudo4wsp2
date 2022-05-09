import { createContext, useContext, useEffect, useState } from 'react'

import { modulesData } from '@data/modulesData'
import { questionsData } from '@data/questionsData'

const AulaContext = createContext()

export const AulaProvider = (props) => {
  const [showIndex, setShowIndex] = useState(true)
  const [nowPlaying, setNowPlaying] = useState({
    lessonN: null,
    moduleN: null
  })
  const [nextPlaying, setNextPlaying] = useState({
    l: null,
    m: null
  })
  const [showQuestion, setShowQuestion] = useState(false)
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)

  const [pauseVideo, setPauseVideo] = useState(false)

  const { moduleN, lessonN } = nowPlaying

  /* Search previous state in localstorage */
  useEffect(() => {
    /* NowPlaying LS State */
    const lsNowPLaying = JSON.parse(window.localStorage.getItem('nowplaying'))
    lsNowPLaying
      ? setNowPlaying(lsNowPLaying)
      : lSetNowPlaying({ l: 0, m: 0 })

    /* Points LS State */
    const lsPoints = window.localStorage.getItem('points')
    lsPoints
      ? setPoints(parseInt(lsPoints))
      : lSetPoints(0)
  }, [])

  useEffect(() => {
    if (moduleN !== null) {
      /* Get unanswered questions */
      const lsq = window.localStorage.getItem('ansQuestions')
      const lsAnsQuestions = new Set(lsq ? lsq.split(',') : [])
      const qIDs = modulesData[moduleN].lessons[lessonN].qIDs || []
      const difference = qIDs.filter(x => !lsAnsQuestions.has(x))
      setQuestions(difference)

      /* Safe Set NextPlaying */
      const lessonsLength = modulesData[moduleN || 0].lessons.length
      const modulesLength = modulesData.length
      let newLesson = lessonN + 1
      let newModule = moduleN + 1
      newModule = newLesson < lessonsLength
        ? moduleN
        : newModule === modulesLength
          ? 0
          : newModule
      newLesson = newLesson < lessonsLength
        ? newLesson
        : newLesson === lessonsLength &&
          0
      setNextPlaying({ l: newLesson, m: newModule })
    }
  }, [nowPlaying])

  /* Helpers (Aun no encuentro un buen lugar) */
  const lSetNowPlaying = ({ l = lessonN, m = moduleN }) => {
    const newPlaying = { lessonN: l, moduleN: m }
    setNowPlaying(newPlaying)
    window.localStorage.setItem('nowplaying',
      JSON.stringify(newPlaying))
  }

  const lSetPoints = (p) => {
    setPoints(p)
    window.localStorage.setItem('points', p)
  }

  const withAulaFade = (f) => {
    setShowIndex(false)
    setTimeout(() => {
      f()
      setShowIndex(true)
    }, 400)
  }

  const safeChangeNowPlaying = (l, m) => {
    const haveQuestions = questions.length > 0

    if (l === undefined && m === undefined) {
      if (haveQuestions) {
        setPauseVideo(true)
        withAulaFade(() => setShowQuestion(true))
      } else {
        withAulaFade(() => lSetNowPlaying(nextPlaying))
      }
    } else if (l !== lessonN || m !== moduleN) {
      if (haveQuestions) {
        setPauseVideo(true)
        withAulaFade(() => setShowQuestion(true))
        setNextPlaying({ l, m })
      } else {
        withAulaFade(() => lSetNowPlaying({ l, m }))
      }
    }
  }

  const value = {
    modulesData,
    questionsData,
    nowPlaying,
    setNowPlaying,
    questions,
    lSetNowPlaying,
    showQuestion,
    setShowQuestion,
    points,
    setPoints,
    showIndex,
    withAulaFade,
    lSetPoints,
    pauseVideo,
    setPauseVideo,
    safeChangeNowPlaying,
    nextPlaying
  }

  return <AulaContext.Provider value={value} {...props} />
}

export const useAula = () => {
  return useContext(AulaContext)
}
