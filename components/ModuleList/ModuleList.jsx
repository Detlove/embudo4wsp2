import { modulesData } from '@data/modulesData'
import { ModuleItem } from '@components/ModuleItem/ModuleItem'
import styles from './moduleslist.module.css'

export const ModuleList = () => {
  return (
    <>
      <h3 className={styles.title}>Contenido del curso</h3>
      <section className={styles.section}>
        {
            modulesData.map((module, mIndex) =>
              <ModuleItem
                key={mIndex}
                {...{ module, mIndex }}
              />
            )
          }
      </section>
    </>
  )
}
