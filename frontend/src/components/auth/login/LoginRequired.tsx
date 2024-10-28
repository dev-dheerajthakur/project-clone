"use server"
import { cookies } from 'next/headers'
import Link from 'next/link';
import React from 'react'
import styles from './styles/loginRequired.module.css'

const LoginRequired = ({children}: {children:React.ReactElement}) => {
  
  const cookieStore = cookies();
  const isLogin = cookieStore.get("u_state");
  if(isLogin){
    return(
      <>
        {children}
      </>
    )
  }else{
    return (
      <div className={styles.loginTemplate}>
        <div>
          <div>
            <div className={styles.greet}>Enjoy your favorite Esports</div>
          </div>
          <div className={styles.linkContainer}>
            <Link className={styles.loginLink} href={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginRequired
