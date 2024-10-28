import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import React from 'react'
import styles from './styles/worldChat.module.css'

const WorldChat = () => {
  return (
    <div className={styles.worldChatBox}>
      <div className={styles.inputBox}>
        <input className={styles.input} type="text" placeholder='type...'/>
      </div>
    </div>
  )
}

export default WorldChat
