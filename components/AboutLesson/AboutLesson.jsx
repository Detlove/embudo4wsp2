import { useAula } from '@context/AulaContext'
import { SKAboutLesson } from './SK/SKAboutLesson'

import styles from './aboutlesson.module.css'

export const AboutLesson = () => {
  const { nowPlaying: { moduleN, lessonN }, modulesData } = useAula()

  const { title } = moduleN !== null && modulesData[moduleN].lessons[lessonN]

  return moduleN === null
    ? <SKAboutLesson />
    : (
      <section className={styles.section}>
        <h1 className={styles.title}>
          {moduleN + 1}.{lessonN + 1} | {title}
        </h1>
        <div className={styles.author}>
          <img src='/img/author_photo.png' className={styles.author_photo} />
          <p className={styles.author_name}>
            German Regalado
          </p>
        </div>
      </section>
      )
}
