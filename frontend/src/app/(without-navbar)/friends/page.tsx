import React from 'react'
import styles from './page.module.css'
import { cookies } from 'next/headers'
import { getallFriends } from '@/api/friends/get-allFriends'
import { apiType } from '@/api/types/apiTypes'
import Titles from '@/components/temp/Titles'
import AllFriendSection from '@/components/friends/AllFriendSection'
import FriendsSearchBox from '@/components/temp/FriendSearchBox'
import Footer from '@/components/footer/Footer'

const page = async () => {
  const cookieStore = cookies();
  const i_state = cookieStore.get("i_state")?.value;
  
  const json :apiType= await getallFriends({ auth :i_state });
  const friends :Array<any>= json.data.friend_details; 

  return (

    <div>
      <div className={styles.newConversation}>
        <Titles title="Friends" />
        <FriendsSearchBox style={{marginBottom: "10px"}} />
        <AllFriendSection friends={friends} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default page
