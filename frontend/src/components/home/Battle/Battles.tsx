"use client"
import React, { useState } from "react";
import BattleCard from "./BattleCard";
import style from "./style/Battles.module.css"
import BCZ from "./BCZ";
import FilterBattle from "../filter-battle/FilterBattle";

const Battles = ({
  battles
}: {
  battles: any[]
}) => {

  const [filterdBattle, setFilterdBattle] = useState(battles);

  return (
    <div style={{height: "70%"}}>
      <FilterBattle setFilterdBattle={setFilterdBattle} battles={battles} />
      <div className={style.battles}>
        {/* {battles?.map((obj:any)=>{return <BattleCard key={obj._id} battle={obj} />})} */}
        {filterdBattle?.map((obj:any)=>{return <BCZ key={obj._id} battle={obj} />})}
        {/* {!json[0].test&&json.map((obj)=>{return <BattleCard key={obj._id.$oid} battle={obj} />})} */}
        {!filterdBattle&&<div className={style.battleTemplate} >
          Battle Cooming Soon !
        </div>}
      </div>
        {filterdBattle.length<1&&<div className={style.battleTemplate} >
          Battle Cooming Soon !
        </div>}
    </div>
  );
};

export default Battles;