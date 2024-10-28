import BattleDetails from "@/components/home/Battle/BattleDetails";
import React from "react";
import style from './styles/page.module.css'
import { fetchSingleBattle } from "@/api/battle/battles";
import { apiType } from "@/api/types/apiTypes";
import toast from "@/scripts/toast";
import NavigateBack from "@/hooks/Navigate.back";
import Image from "next/image";

const page = async ({params}: {params: {battleId: string}}) => {
  
  const _id = params.battleId;
  const json :apiType = await fetchSingleBattle(_id);

  if(!json.success){
    return (
      <div>
        <NavigateBack styles={{
          margin: "15px"
        }}>
          <Image width={20} height={20} src="/icons/arrowLeftWhite.png" alt="back" />
        </NavigateBack>
        <div style={{
          height: "80dvh",
          fontSize: "200%",
          display: "grid",
          placeItems: "center",
          opacity: 0.5
        }}>
          Battle Not Found !
        </div>
      </div>
    )
  }  
  return (
    <div className={style['battle-details']}>
      <BattleDetails battle={json.data.battle} />
    </div>
  );
};

export default page;
