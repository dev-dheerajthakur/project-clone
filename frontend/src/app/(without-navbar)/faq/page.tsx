import React from 'react'
import styles from './page.module.css'
import FAQ from '@/components/faq/Faq'
import FAQS from '@/components/faq/FAQS'

const page = () => {
  return (
    <div className={styles.faq}>
      {/* <FAQ /> */}
      <FAQS />
    </div>
  )
}

export default page
