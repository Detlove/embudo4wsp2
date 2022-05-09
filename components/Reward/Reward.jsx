import { motion } from 'framer-motion'
import { useAula } from '@context/AulaContext'
import SLock from '@components/SVG/SLock'

import styles from './reward.module.css'

export const Reward = () => {
  const { points } = useAula()
  const goal = 50

  const pntComplete = points <= goal ? (points * 100) / goal : 100

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <h2>
          Responde correctamente y
          gana el Ebook <strong>“12 Secretos que no sabias de Whatsapp”</strong>
        </h2>
        <picture className={styles.book}>
          <img src='/img/ebook.png' />
          <motion.button
            className={styles.button}
            whileTap={{
              scale: 0.98
            }}
          >
            <SLock />DESCARGAR
          </motion.button>
        </picture>
      </div>
      <div className={styles.progress}>
        0
        <div className={styles.bar}>
          <div
            className={styles.fill}
            style={{ width: `${pntComplete}%` }}
          />
        </div>
        {goal}
        <span className={styles.current} style={{ '--current': points }}> puntos</span>
      </div>
    </section>
  )
}
