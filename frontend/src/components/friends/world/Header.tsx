import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import React from 'react'
import styles from './styles/header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headline}>
        <NavigateBack home styles={{height: "17px", width: "17px"}}>
          <Image width={15} height={15} alt='' src="/icons/arrowLeftWhite.png" />
        </NavigateBack>
        <div className={styles.worldTemplate}>World</div>
      </div>
      <div className={styles.linkC}>
        <Link className={styles.link} href="/world">
          <Image className='' height={20} width={20} alt='' src="/icons/world-chat.png" />
        </Link>
      </div>
    </div>
  )
}

export default Header
