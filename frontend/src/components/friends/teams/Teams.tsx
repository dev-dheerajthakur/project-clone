"use client"
import React, { useState } from 'react';
import styles from './styles/teams.module.css';
import { apiType } from '@/api/types/apiTypes';
import Image from 'next/image';
import Options from './Options';
import MemberEditorModal from './MemberEditorModal';

// Define types for team members and teams
interface Member {
  userName: string;
  profile: string;
  ffUid: number;
}

interface Team {
  teamName: string;
  admin: Member[];
  members: Member[];
}

interface TeamsProps {
  teams: apiType;
}

const Teams: React.FC<TeamsProps> = ({ teams }) => {
  // Render a message if there are no teams
  const [openModal, setOpenModal] = useState(false)
  const [member, setMember] = useState("")

  const openModalFun = (member :string)=>{
    setMember(member);
    setOpenModal(true);
  }

  if (teams.data.length === 0) {
    return (
      <div className={styles.teams}>
        <div className={styles.createTeamTemplate}>
          Create Team !!
        </div>
      </div>
    );
  }

  // Render teams
  return (
    <div className={styles.teams}>
      {teams.data.map((team :Team) => (
        <div key={team.teamName}>
          <div className={styles.teamAvatarContainer}>
            <Image className={styles.teamAvatar} height={100} width={100} alt={`${team.teamName} Avatar`} src="/men.png" />
            <div>{team.teamName}</div>
          </div>
          <Options />

          <div className={styles.teamMembersContainer}>
            <div onClick={()=>{openModalFun(team.admin[0].userName)}} className={styles.teamMembers}>
              {team.admin.length > 0 && (
                <span>
                  <Image className={styles.avatar} height={40} width={40} alt={`Avatar`} src={team.admin[0].profile} />
                  <div className={styles.memberInfo}>
                    {team.admin[0].userName}
                    <div className={styles.memberFFUid}>{team.admin[0].ffUid}</div>
                  </div>
                </span>
              )}
              <div className={styles.adminTemplate}>team leader</div>
            </div>
            <div>
              {team.members.map((member) => (
                <div onClick={()=>{openModalFun(member.userName)}} key={member.userName} className={styles.teamMembers}>
                  <span>
                    <Image className={styles.avatar} height={40} width={40} alt={`${member.userName} Avatar`} src={member.profile} />
                    <div className={styles.memberInfo}>
                      {member.userName}
                      <div className={styles.memberFFUid}>{member.ffUid}</div>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <MemberEditorModal member={member} open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default Teams;
