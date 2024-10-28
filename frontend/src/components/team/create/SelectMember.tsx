"use client"
import React, { useState } from 'react'
import styles from './styles/selectMember.module.css'
import Image from 'next/image'
import { apiType } from '@/api/types/apiTypes'
import toast from '@/scripts/toast'
import { useRouter } from 'next/navigation'


const SelectMember = ({members, createTeamFunction, authorization}: {members?: Array<any>, createTeamFunction ?:any, authorization: string | undefined}) => {
  
  const router = useRouter();
  
  const [memberSelected, setMemberSelected] = useState(new Set());
  const [teamName, setTeamName] = useState("");
  const updateTeamName = (e: any)=>{
    setTeamName(e.target.value);
  };

  const selectMember = (member: any)=>{
    const alreadyJoined = memberSelected.has(member);
    if(alreadyJoined){
      const anotherSet = new Set(memberSelected);
       anotherSet.delete(member)
       setMemberSelected(new Set(anotherSet))
    }else{
       setMemberSelected(pre => new Set(pre.add(member)))
    }
  };

  const selectedMemberArray :Array<any> = Array.from(memberSelected);

  const activePage2 = ()=>{
    const page2 = document.getElementById("createTeamPage2");
    const input = (document.getElementById("newTeamNameInput")) as HTMLInputElement;
    if(!(page2 && input)){return}
    page2.style.scale = "1"
    input.focus();
    input.addEventListener("keypress", (e :any)=>{
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        input.blur();
        // e.currentTarget.closest("form").submit();
    }
    })
  };
  const blurPage2 = ()=>{
    const page2 = document.getElementById("createTeamPage2");
    const input = (document.getElementById("newTeamNameInput")) as HTMLInputElement;
    if(!(page2 && input)){return}
    page2.style.scale = "0"
    input.blur();
  };

  const createTeam = async ({ authorization, teamMembers, teamName } :{authorization: string | undefined, teamMembers: Array<unknown>, teamName: string}) => {
    const memberUserNames = teamMembers.map((member :any)=>{return member.userName})
    const json :apiType = await createTeamFunction({authorization, teamMembers: memberUserNames, teamName});
    if(json.error){
      return toast(json.error)
    };
    if(json.success){
      router.push("/friends/teams");
      return toast("team create successfully !!");
    }
  }

  return (
    <div>
      <div className={styles.selectedMembers}>
        {Array.from(memberSelected).map((member :any) =>{
          return (
            <div onClick={()=>{selectMember(member)}} key={member.userName} className={styles.selectedMember}>
              <div className={styles.selectedMembersProfile}>
                <Image className={styles.img1} width={50} height={50} alt='' src={member.profile} />
                {memberSelected.has(member)&&<Image className={styles.img2} width={15} height={15} alt='' src="/icons/remove.png" />}
              </div>
                <div className={styles.selectedMembersUsername}>{member.userName}</div>
            </div>
          )
        })}
      </div>
      <div className={styles.allMembers}>
        {
          members?.map(member => (
              <div onClick={()=>{selectMember(member)}} key={member.userName} className={styles.friendBox}>
                <div className={styles.friendTemplate}>
                  <div className={styles.memberProfile}>
                    <Image className={styles.friendsProfile} height={50} width={50} alt='' src={member.profile} />
                    {memberSelected.has(member)&&<Image className={styles.removeMemberPng} width={15} height={15} alt='' src="/icons/check.png" />}
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

      <div onClick={activePage2} className={`${styles.confirmBtn} ${selectedMemberArray.length<1&&styles.hide}`}>
        <Image height={50} width={55} alt='' src="/icons/next.png" />
      </div>

      <div className={styles.page2} id='createTeamPage2'>
        <div className={styles.page2Box}>
          <div className={styles.teamHeader}>
            <Image width={50} height={50} alt='' src="/men.png" />
            <textarea spellCheck={false} autoComplete='off' autoCorrect='off' onChange={updateTeamName} placeholder='Team Name' className={styles.teamNameInput} maxLength={15} rows={1} role="" id='newTeamNameInput'/>
          </div>
          <div className={styles.members}>
            <div className={`${styles.member} ${styles.admin}`}>
              <span>
                  <Image height={40} width={40} alt='' src={"/men.png"} />
                  <div className={styles.memberUserName}>{"dheeraj"}</div>
              </span>
                  <div className={styles.adminTemplate}>admin</div>
            </div>
            {
              selectedMemberArray.map( (member :any) => (
                <div key={member.userName} className={styles.member}>
                  <Image height={40} width={40} alt='' src={member.profile} />
                  <div className={styles.memberUserName}>{member.userName}</div>
                </div>
              ))
            }
          </div>
          <button onClick={()=>{
              createTeam({authorization, teamMembers: selectedMemberArray, teamName})

            }} disabled={teamName.length<=2?true:false} className={styles.createTeamBtn}>
            Create Team
          </button>
        </div>
      </div>
    </div>
  )
}

export default SelectMember
