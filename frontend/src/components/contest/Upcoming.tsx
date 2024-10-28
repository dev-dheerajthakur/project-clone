import React from "react";
import styles from "./styles/upcoming.module.css";
import ContestCard from "./ContestCard";

const Upcoming = ({ upcomingBattle }: { upcomingBattle?: any[] }) => {
  
  return (
    <div style={{overflow: 'auto'}}>
      {upcomingBattle ? (
        <div style={{display: "grid", gridGap: "10px"}}>
          {upcomingBattle?.map((obj:any)=>{return <ContestCard key={obj._id} battle={obj} />})}
        </div>
      ) : (
        <div className={styles.template}>Play, Earn and Enjoy !</div>
      )}
    </div>
  );
};

export default Upcoming;
