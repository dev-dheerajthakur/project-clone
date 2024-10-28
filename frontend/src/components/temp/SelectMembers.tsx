"use client"
import React, { useState } from 'react'
import styles from './styles/selectMembers.module.css'
import Image from 'next/image'
import UserTemplates from './UserTemplates'

const SelectMembers = ({
  members,
} :{
  members ?:any[],
  selectedMembers ?:Set<unknown>,
  setSelectedMembers ?:React.Dispatch<React.SetStateAction<Set<unknown>>>
}) => {

    const [selectedMembers, setSelectedMembers] = useState(new Set())

    const updateMembers = (member: any)=>{
        const alreadySelected = selectedMembers.has(member);
        if(alreadySelected){
          const anotherSet = new Set(selectedMembers);
           anotherSet.delete(member)
           setSelectedMembers(new Set(anotherSet))
        }else{
           setSelectedMembers(prev => new Set(prev.add(member)))
        }
      };

  return (
    <div>
      <div className={styles.selectedMembers}>
        {Array.from(selectedMembers).map((member :any) =>{
          return (
            <div onClick={()=>{updateMembers(member)}} key={member.userName} className={styles.selectedMember}>
              <div className={styles.selectedMembersProfile}>
                <Image className={styles.img1} width={50} height={50} alt='' src={member.profile} />
                {selectedMembers.has(member)&&<Image className={styles.img2} width={15} height={15} alt='' src="/icons/remove.png" />}
              </div>
                <div className={styles.selectedMembersUsername}>{member.userName}</div>
            </div>
          )
        })}
      </div>
      
      <div className={styles.allMembers}>
        {
          members?.map(member => (
              <div onClick={()=>{updateMembers(member)}} key={member.userName} className={styles.friendBox}>
                <div className={styles.friendTemplate}>
                  <div className={styles.memberProfile}>
                    <Image className={styles.friendsProfile} height={50} width={50} alt='' src={member.profile} />
                    {selectedMembers.has(member)&&<Image className={styles.removeMemberPng} width={15} height={15} alt='' src="/icons/check.png" />}
                  </div>
                  <div className={styles.names}>
                    <div className={styles.userName}>{member.userName}</div>
                    <div className={styles.uid}>{member.ffUid}</div>
                  </div>
                </div>
              </div>
          ))
        }
      </div>

    </div>
  )
}

export default SelectMembers
