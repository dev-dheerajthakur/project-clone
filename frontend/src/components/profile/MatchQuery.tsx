import React from 'react'
import styles from './styles/matchQuery.module.css'
import Image from 'next/image'

const MatchQuery = ({style}: {style: React.CSSProperties}) => {
  return (
    <div style={style} className={styles.queryContainer}>
      <div className={styles.queryTitle}>Battle Royal &nbsp; 2v2 <span className={styles.filterQuery}><Image height={15} width={15} alt='' src="/icons/terminal.png" /></span></div>
      <div className={styles.queryBox}>
        <div className={styles.progressBarContaienr}>
          <div className={styles.progressBarParent}>
            <div className={styles.progressBar}>
              <div className={styles.progressBarChild}>
                73.95%
              </div>
            </div>
          </div>
          win rate
        </div>
        <div>
          <div><span className={styles.queryTag}><Image height={15} width={15} alt='' src="/icons/game-controller.png" />&nbsp; Games</span>174</div>
          <div><span className={styles.queryTag}><Image height={15} width={15} alt='' src="/icons/letter-v.png" />&nbsp; Wins</span>104</div>
          <div><span className={styles.queryTag}><Image height={15} width={15} alt='' src="/icons/death.png" />&nbsp; Elimination</span>684</div>
        </div>
      </div>
    </div>













    // <div className={styles.queryContainer} style={style}>
    //   <div className={styles.circleContainer}>
    //     <div className={styles.circleParent}>
    //       <div className={styles.circle} style={{background: `conic-gradient( red ${300}deg, transparent 0deg)`}}>
    //         <div className={styles.circleChild}>70.01%</div>
    //       </div>
    //     </div>
    //     <div className={styles.circleParent}>
    //       <div className={styles.circle} style={{background: `conic-gradient( #00aeff ${260}deg, transparent 0deg)`}}>
    //         <div className={styles.circleChild}>57.6%</div>
    //       </div>
    //     </div>
    //     <div className={styles.circleParent}>
    //       <div className={styles.circle} style={{background: `conic-gradient( yellow ${100}deg, transparent 0deg)`}}>
    //         <div className={styles.circleChild}>27.3%</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MatchQuery
  