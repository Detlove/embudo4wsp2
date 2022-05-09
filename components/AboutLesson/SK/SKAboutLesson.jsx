import styles from './skaboutlesson.module.css'

export const SKAboutLesson = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title} />
      <div className={styles.author_photo} />
      <div className={styles.author_name} />
    </section>
  )
}
