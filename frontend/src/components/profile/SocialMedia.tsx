import React from 'react'
import styles from './styles/socialMedia.module.css'
import Image from 'next/image'

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <Image height={17} width={17} alt='y' src="/icons/youtube.png" />
    </div>
  )
}

export default SocialMedia
