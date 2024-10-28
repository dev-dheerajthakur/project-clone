import React from 'react'
import styles from './page.module.css'
import Header from '@/components/profile/Header'
import UserProfile from '@/components/profile/UserProfile'
import MatchQuery from '@/components/profile/MatchQuery'
import Balance from '@/components/profile/Balance'

const page = ({params}: {params :any}) => {
  const user = params.user;
  return (
    <div className={styles.profile}>
      <Header userName={user}/>
      <UserProfile style={{marginTop: 20}} name='khuts' uid={44533432} />
      <MatchQuery style={{marginTop: 15}} />
    </div>
  )
}

export default page
