"use server"
import React from 'react'
import styles from './page.module.css'
import Header from '@/components/team/create/Header'
import SelectMember from '@/components/team/create/SelectMember'
import { apiType } from '@/api/types/apiTypes'
import { getallFriends } from '@/api/friends/get-allFriends'
import { cookies } from 'next/headers'
import createTeam from '@/api/team/createTeam'
import getTeams from '@/api/team/getTeam'
import NavigateBack from '@/hooks/Navigate.back'

const page = async () => {

  const cookieStore = cookies();
  const i_state = cookieStore.get("i_state")?.value;
  const u_n_state = cookieStore.get("u_n_state")?.value;
  
  const team :apiType = await getTeams({authorization: u_n_state})

  if(team.data.length>0){
    return (
      <div>
        <NavigateBack auto>
          <div>
            Back to Home
          </div>
        </NavigateBack>
      </div>
    )
  }

  const json :apiType= await getallFriends({ auth :i_state });
  const members :Array<any>= json.data.friend_details; 

  return (
    <div className={styles.teamBox}>
      <Header />
      <SelectMember authorization={u_n_state} createTeamFunction={createTeam} members={members} />
    </div>
  )
}

export default page
