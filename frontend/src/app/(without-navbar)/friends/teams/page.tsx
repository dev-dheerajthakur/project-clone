"use server"
import React from 'react'
import styles from './page.module.css'
import Header from '@/components/friends/teams/Header'
import Teams from '@/components/friends/teams/Teams'
import getTeams from '@/api/team/getTeam'
import { cookies } from 'next/headers'
import { apiType } from '@/api/types/apiTypes'
import ComingSoon from '@/components/temp/ComingSoon'

const page = async () => {
  const cookiStore = cookies();
  const u_n_state = cookiStore.get("u_n_state")?.value;
  const json :apiType= await getTeams({authorization: u_n_state});
  return (
    <div>
      <Header teams={json}/>
      {/* <Teams teams={json} /> */}
      <ComingSoon />
    </div>
  )
}

export default page
