import { useAula } from '@context/AulaContext'
import { Counter } from './Counter/Counter'
import { Player } from './Player/Player'
import SNext from '../SVG/SNext'

import styles from './video.module.css'

export const Video = () => {
  const { safeChangeNowPlaying } = useAula()

  return (
    <section className={styles.section}>
      <Player />
      <div className={styles.controls}>
        <Counter />
        <div
          className={styles.next_cont}
          onClick={safeChangeNowPlaying}
        >
          <SNext className={styles.snext} />
          Siguiente clase
        </div>
      </div>
    </section>
  )
}
