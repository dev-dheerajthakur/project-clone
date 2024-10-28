// "use client";
// import Image from "next/image";
// import React, { useState, useRef } from "react";
// import style from "./style/BattlePlayerDetails.module.css";

// interface TeamType {
//   team: string;
//   members: string[];
// }

// interface BattlePlayerDetailsProps {
//   teams: TeamType[];
//   slots: number;
// }

// const BattlePlayerDetails: React.FC<BattlePlayerDetailsProps> = ({ teams, slots }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [oneTeamIndex, setOneTeamIndex] = useState<number>(-1)
//   const playerDivRef = useRef<HTMLDivElement>(null);
//   const imgRef = useRef<HTMLImageElement>(null);
//   const teamRef = useRef<HTMLDivElement>(null);

//   const togglePlayer = () => {
//     if (playerDivRef.current && imgRef.current) {
//       setIsOpen((prev) => !prev);

//       playerDivRef.current.style.height = isOpen
//         ? "50px"
//         : `${teams.length * 50 + 370}px`;
//       imgRef.current.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
//     }
//   };

//   const toggleteam = (e :any)=>{
//     if(!e.target.classList.contains("effectiveTeamToggleClick")){return}
//     const allTeam :any = document.getElementsByClassName("selectedTeamClassForToggle");
//     for (let i = 0; i < allTeam.length; i++) {
//       allTeam[i].style.height = "40px"
//       if(allTeam[i]===e.currentTarget){
//         setOneTeamIndex(i)
//       }
//     };

//     const sameTeamActive = allTeam[oneTeamIndex]===e.currentTarget
//     if(!sameTeamActive){
//         e.currentTarget.style.height = "160px"
//     }else{
//       setOneTeamIndex(-1)
//     }
//   }

//   return (
//     <div ref={playerDivRef} className={style.players}>
//       <div onClick={togglePlayer} className={style["players-banner"]}>
//         <span>
//           Teams... &nbsp;{" "}
//           <span className={style.playerCount}>
//             ({`${teams.length}/${slots}`})
//           </span>
//         </span>
//         <Image
//           ref={imgRef}
//           className={style["players-arrow"]}
//           width={20}
//           height={17}
//           src="/icons/arrowDown.png"
//           alt="Down"
//         />
//       </div>
//       <div className={style.teams}>
//         {teams.map((data, index) => (
//           <div onClick={toggleteam} ref={teamRef} className={`${style.team} selectedTeamClassForToggle`} key={data.team}>
//             <div className={`${style.teamTemplate} effectiveTeamToggleClick`}>
//               {index + 1}. &nbsp; &nbsp;{data.team}{" "}
//               <Image
//                 width={12}
//                 height={12}
//                 src="/icons/singleArrowDown.png"
//                 alt="arrow"
//               />
//             </div>
//             <div className={style.teamMembers}>
//               {data.members.map((member, memberIndex) => (
//                 <div key={member} className={style.teamMember}>
//                   {memberIndex + 1}. &nbsp; &nbsp;{member}
//                 </div>
//               ))}
//               {data.members.map((member, memberIndex) => (
//                 <div key={member} className={style.teamMember}>
//                   {memberIndex + 1}. &nbsp; &nbsp;{member}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BattlePlayerDetails;



"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import style from "./style/BattlePlayerDetails.module.css";

interface TeamType {
  team: string;
  members: string[];
}

interface BattlePlayerDetailsProps {
  teams: TeamType[];
  slots: number;
}

const BattlePlayerDetails: React.FC<BattlePlayerDetailsProps> = ({ teams, slots }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedTeamIndex, setExpandedTeamIndex] = useState<number | null>(0);
  const playerDivRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const togglePlayer = () => {
    setIsOpen((prev) => !prev);

    if (playerDivRef.current && imgRef.current) {
      playerDivRef.current.style.height = isOpen ? "50px" :`${teams.length * 50 + 200 }px`;
      imgRef.current.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
    }
  };

  const toggleTeam = (index: number) => {
    setExpandedTeamIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div ref={playerDivRef} className={style.players}>
      <div onClick={togglePlayer} className={style["players-banner"]}>
        <span>
          Teams... &nbsp;
          <span className={style.playerCount}>
            ({`${teams.length}/${slots}`})
          </span>
        </span>
        <Image
          ref={imgRef}
          className={style["players-arrow"]}
          width={20}
          height={17}
          src="/icons/arrowDown.png"
          alt="Down"
        />
      </div>
      <div className={style.teams}>
        {teams.map((data, index) => (
          <div
            key={data.team}
            className={`${style.team} ${expandedTeamIndex === index ? style.expanded : ""}`}
            onClick={() => toggleTeam(index)}
          >
            <div className={`${style.teamTemplate} effectiveTeamToggleClick`}>
              {index + 1}. &nbsp; &nbsp;{data.team}
              <Image
                width={12}
                height={12}
                src="/icons/singleArrowDown.png"
                alt="arrow"
              />
            </div>
            {expandedTeamIndex === index && (
              <div className={style.teamMembers}>
                {data.members.map((member, memberIndex) => (
                  <div key={member} className={style.teamMember}>
                    {memberIndex + 1}. &nbsp; &nbsp;{member}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattlePlayerDetails;
