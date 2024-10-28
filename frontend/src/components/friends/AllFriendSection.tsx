"use client"
import Link from 'next/link'
import React from 'react'
import styles from './styles/allFriendSection.module.css'
import Image from 'next/image'

const AllFriendSection = ({friends} : {friends: Array<any>}) => {

  const foucusTargetFriend =  async (e :any)=>{
    
      // for (let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
      //   const elements = e.currentTarget.parentNode.children[i];
        

      //   elements.classList.remove(styles.activeBorder);
      //   elements.children[1].classList.remove(styles.showActionBox);
      // }
      // e.currentTarget.classList.toggle(styles.activeBorder);
      // e.currentTarget.children[1].classList.toggle(styles.showActionBox);
    }



  
  return (
    <div>
      <div className={styles.addFriendBox}>
        <Link href="/friends/add">
          {/* <button className={styles.addFriendsBtn}> + Add </button> */}
          <Image className={styles.addFriendImg} width={60} height={60} alt='' src="/icons/add.png" />
        </Link>
      </div>

      {friends.length<0?<div className={styles.noFriendTemplate}>
        Looks having no Friend ! 
        <div>Make Some ?</div>
      </div>:
      <div>
        {
          friends.map(obj => (
            <div onClick={foucusTargetFriend} key={obj.userName} className={styles.friendBox}>
              <div className={styles.friendTemplate}>
                <Image className={styles.friendsProfile} height={50} width={50} alt='' src={obj.profile} />
                <div className={styles.names}>
                  <div className={styles.userName}>{obj.userName}</div>
                  <div className={styles.uid}>{obj.ffUid}</div>
                </div>
              </div>
              <div className={styles.actionBox}>
                <div className={styles.actions}>
                  <Link href={`/profile/${obj.userName}`}>
                    <Image height={20} width={20} alt='' src="/icons/info.png" />
                  </Link>
                </div>
                <div className={styles.actions}>
                  <Link href={`/chat/dheeraj.mafia`}>
                    <Image height={20} width={20} alt='' src="/icons/chat.png" />
                  </Link>
                </div>
                <div className={styles.actions}>
                  <Link href={`/profile/${obj.userName}`}>
                    <Image height={20} width={20} alt='' src="/icons/user.png" />
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>}
    </div>
  )
}

export default AllFriendSection
