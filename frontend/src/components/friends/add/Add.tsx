"use client"
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './add.module.css'
import findUser from '@/api/user/findUser'
import { apiType } from '@/api/types/apiTypes'
import toast from '@/scripts/toast'
import Link from 'next/link'
import { createFriendRequest } from '@/api/notification/createFriendRequest'
import FriendsSearchBox from '@/components/temp/FriendSearchBox'

const Add = ({auth}: {auth: string | undefined}) => {
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState([]);
  
  const updateUser = (e:any)=>{
    setUserToken(e.target.value)
  };
  const submitForm = async (e:any)=>{
    e.preventDefault();
    e.target.children[0].blur()
    if(userToken.length===0){return}
    const json :apiType = await findUser(userToken.toLowerCase());
    
    if(json.success){
      setUser(json.data.user)
    }else{
      setUser([])
      toast(json.error)
    }
  };



  interface userInterface {
    _id: string,
    name: string,
    ffUid: number,
    profile: string,
    userName: string
  }

  const riseRequest = async ({to}: {to: string})=>{
    const json :apiType= await createFriendRequest({auth, to})
    if(json.error){
      toast(json.error)
    }else{
      toast(json.data)
    }
  }


  return (
    <div>
      <div className={styles.header}>
        <NavigateBack styles={{height: "17px"}}>
          <Image height={17} width={17} alt='' src="/icons/arrowLeftWhite.png" />
        </NavigateBack> 
        <span className={styles.addTemplate}>Add</span>
      </div>
      <div className={styles.inputContainer}>
        <FriendsSearchBox />
        {/* <form onSubmit={submitForm}>
          <input autoCapitalize="off" onChange={updateUser} value={userToken} type="search" className={styles.searchInput} placeholder='uid or username' />
        </form> */}
      </div>
      
      <div>
        {
          user.map((obj :userInterface)=>{
            return(
              <div key={obj.userName} className={styles.userContainer}>
                <Link href={`/profile/${obj.userName}`}>
                  <div>
                    <Image className={styles.userPng} height={55} width={55} alt='' src={obj.profile}/>
                  </div>
                  <div className={styles.userName}>
                    <div>{obj.userName}</div>
                    <div className={styles.uid}>{obj.ffUid}</div>
                  </div>
                </Link>
                <div onClick={()=>{riseRequest({to: obj._id})}} className={styles.addBtn}> 
                  <Image height={25} width={25} alt='' unoptimized src="/icons/add-friend.png" />
                </div>
              </div>
            )
          })
        }
              {/* <div className={styles.userContainer}>
                <div>
                  <Image className={styles.userPng} height={55} width={55} alt='' src="/men.png"/>
                </div>
                <div className={styles.userName}>
                  <div>dheeraj.mafia</div>
                  <div className={styles.uid}>2206129546</div>
                </div>
              </div> */}
      </div>
    </div>
  )
}

export default Add
