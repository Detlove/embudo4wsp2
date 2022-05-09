import { AulaProvider, useAula } from '@context/AulaContext'
import { Video } from '@components/Video/Video'
import { AboutLesson } from '@components/AboutLesson/AboutLesson'
import { ModuleList } from '@components/ModuleList/ModuleList'
import { QuestionPage } from '@components/QuestionPage.jsx/QuestionPage'

import styles from './aula.module.css'

export default (props) => {
  return (
    <AulaProvider>
      <Aula {...props} />
    </AulaProvider>
  )
}

const Aula = () => {
  const { showIndex } = useAula()

  return (
    <main className={styles.main}>
      <div
        className={`${styles.container} ${
          showIndex
          ? styles.active
          : styles.hide}`}
      >

        <div className={styles.grid}>
          <Video />
          <div className={styles.bottom}>
            <AboutLesson />
            <ModuleList />
          </div>
        </div>
        <QuestionPage />

      </div>
    </main>
  )
}
