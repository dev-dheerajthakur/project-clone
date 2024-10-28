"use server"
import React from 'react'
import styles from './page.module.css'
import Header from '@/components/profile/Header'
import UserProfile from '@/components/profile/UserProfile'
import MatchQuery from '@/components/profile/MatchQuery'
import Balance from '@/components/profile/Balance'
import PersnolInfo from '@/components/profile/PersnolInfo'
import LoginRequired from '@/components/auth/login/LoginRequired'
import { cookies } from 'next/headers'
import getPersonalInfo from '@/api/user/getPersonalInfo'
import { apiType } from '@/api/types/apiTypes'
import PasswordSecurity from '@/components/profile/PS2'
import SocialMedia from '@/components/profile/SocialMedia'

interface userInterface {
  name: string,
  _id: string,
  ffUid: number,
  iat: number,
  userName: string
};

const page = async () => {
  const cookieStore = cookies();
  const userId = cookieStore.get("i_state")?.value;

  const json :apiType= await getPersonalInfo(userId);
  
  if(!json.data){
    return(
      <div>
        Try Login again !
      </div>
    )
  };
  const { balance, name, ffUid, email, profile, _id, userName, phone } = json.data;
  return (
    <LoginRequired>
      <div className={styles.profile}>
        <Header userName={userName}/>
        <div className={styles.section1}>
          <UserProfile style={{marginTop: 20}} name={name} uid={ffUid} profile={profile} />
          {/* <SocialMedia /> */}
          <Balance balance={balance} style={{marginTop: 35}} />
        </div>
        <div className={styles.section2}>
            {/* <MatchQuery style={{marginTop: 25}} /> */}
            <PersnolInfo style={{marginTop: 35}} name={name} ffUid={ffUid} phone={phone} email={email} userName={userName} />

          {/* <PasswordAndSecurity /> */}
        </div>
          <PasswordSecurity style={{marginTop: 35}} />
      </div>
    </LoginRequired>
  )
}

export default page
