import React from 'react'
import styles from './styles/header.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import Link from 'next/link'
import { apiType } from '@/api/types/apiTypes'

const Header = ({teams} :{teams :apiType}) => {
  return (
    <div className={styles.headerBox}>
      <div className={styles.templateBox}>
        <NavigateBack home styles={{height: 17, width: 17}}>
          <Image width={17} height={17} alt='back' src="/icons/arrowLeftWhite.png" />
        </NavigateBack>
        <div className={styles.teamsTemplate}> Teams </div>
      </div>
      {
        teams.data.length<1&&
        <div>
          <Link className={styles.teamCreationLink} href="/team/create">Create team</Link>
        </div>
      }
      {
        teams.data.length>0&&
        <div style={{display: 'flex', alignItems: 'center', fontSize: "70%"}}>
          <input type="radio" name="analyserf" id="" />
          <input type="radio" name="analyserf" id="" />Analyser
        </div>
      }
    </div>
  )
}

export default Header
