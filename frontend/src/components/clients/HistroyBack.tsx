"use client"
import React, { CSSProperties } from 'react'
import { useRouter } from 'next/navigation'

const HistroyBack = ({children, styles, home}: { children:React.ReactElement, styles?: CSSProperties, home?:boolean }) => {
  const router = useRouter();
  const goBack = ()=>{
    if(home){
      return router.push("/")
    };
    router.back();
  }
  return (
    <div style={styles} onClick={goBack}>
      {children}
    </div>
  )
}

export default HistroyBack
