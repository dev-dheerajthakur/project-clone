import React from 'react'
import styles from './styles/header.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.header}>
      <NavigateBack styles={{height: 20, width: 20}}>
        <Image height={20} width={20} alt='' src="/icons/arrowLeftWhite.png" />
      </NavigateBack>
       <div className={styles.worldTemplate}>World</div>
    </div>
  )
}
export default Header
