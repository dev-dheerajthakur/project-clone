import React from 'react'
import styles from './page.module.css'
import WorldChat from '@/components/world/WorldChat'
import Header from '@/components/world/Header'

const page = () => {
  return (
    <div className={styles.worldBox}>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <WorldChat />
    </div>
  )
}

export default page
