"use server";
import React, { use } from "react";
import styles from "./page.module.css";
import NavigateBack from "@/hooks/Navigate.back";
import Image from "next/image";
import { fetchSingleBattle, joinBattle } from "@/api/battle/battles";
import { apiType } from "@/api/types/apiTypes";
import ConfirmationBattle from "@/components/home/Battle/register/ConfirmationBattle";
import getTeams from "@/api/team/getTeam";
import { cookies } from "next/headers";
import getPersonalInfo from "@/api/user/getPersonalInfo";
import Link from "next/link";

const page = async ({ params }: { params: { battleId: string } }) => {
  const cookieStore = cookies();
  const u_p_state = cookieStore.get("u_p_state")?.value;
  const u_u_state = cookieStore.get("u_u_state")?.value;
  const u_n_state = cookieStore.get("u_n_state")?.value;
  const i_state = cookieStore.get("i_state")?.value;

  if (!u_n_state || !u_p_state || !i_state) {
    return (
      <div>
        <Link href="/login"> login again </Link>
      </div>
    );
  }

  const json: apiType = await fetchSingleBattle(params.battleId);
  const user: apiType = await getPersonalInfo(i_state);

  const {
    data: { battle },
  } = json;

  const teamsJson: apiType = await getTeams({ authorization: u_n_state });
  if (teamsJson.error) {
    return <div></div>;
  };
  


  const joinBattleFunction = async(members: string[])=>{
    "use server"
    const json: apiType = await joinBattle({battle: battle._id, team: teamsJson.data[0]._id, members, Authorization: u_n_state})
    return json;
  }


  return (
    <div className={styles.register}>
      <div>
        <NavigateBack
          styles={{
            float: "right",
            marginRight: "20px",
            marginBottom: "10px",
          }}
        >
          <span className={styles.cross}>x</span>
          {/* <Image className={styles.cross} height={20} width={20} alt='back' src="/icons/plus.png" /> */}
        </NavigateBack>
        <ConfirmationBattle
          joinBattle={joinBattleFunction}
          authorization={{
            userName: u_n_state,
            ffUid: u_u_state,
            profile: u_p_state,
          }}
          balance={user.data.balance}
          battle={battle}
          teams={teamsJson.data}
          battleId={params.battleId}
        />
      </div>
    </div>
  );
};

export default page;
