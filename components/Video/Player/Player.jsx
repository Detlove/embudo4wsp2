import { useAula } from '@context/AulaContext'
import Vimeo from '@u-wave/react-vimeo'

import styles from './player.module.css'

export const Player = () => {
  const { nowPlaying: { moduleN, lessonN }, modulesData, pauseVideo } = useAula()

  if (lessonN === null) {
    return <div className={styles.container} />
  }

  console.log(pauseVideo)

  const { mStatus, lessons } = modulesData[moduleN]
  const { vimeoId } = lessons[lessonN]

  return (
    <div
      className={styles.container}
      key={`${moduleN}.${lessonN} Player`}
      transition={{
        type: 'spring',
        duration: 0.5
      }}
    >
      {
          mStatus === 'unlocked' &&
            <Vimeo
              className={styles.vimeo}
              video={vimeoId}
              autoplay={!pauseVideo}
              paused={pauseVideo}
              controls={false}
              showPortrait={false}
              showTitle={false}
              showByline={false}
              color='FF6363'
            />
        }
      {
          mStatus === 'locked1' &&
            <p>Paga 1 USD</p>
        }
    </div>
  )
}
