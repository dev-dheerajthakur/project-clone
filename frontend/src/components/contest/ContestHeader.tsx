"use client";
import React, { useState } from "react";
import styles from "./styles/contestHeader.module.css";
import { useSwipeable } from "react-swipeable";

const ContestHeader = ({
  upcomingBattle,
  completedBattle,
}: {
  upcomingBattle?: React.ReactElement;
  completedBattle?: React.ReactElement;
}) => {
  const [upcomingPage, setUpcomingPage] = useState(true);
  const [page, setPage] = useState(0)

  const handlePageToggle = (page: number) => {
    setPage(page)
  };

  const handler = useSwipeable({
    onSwipedLeft: ()=>{
      setPage(1)
    },
    onSwipedRight: ()=>{
      setPage(0)
    }
  })

  return (
    <div className={styles.contestContainer} id="pageContainer">
      <div className={styles.pageHeadlines}>
        <div
          className={styles.headlineText}
          onClick={() => handlePageToggle(0)}
        >
          UPCOMING
        </div>
        <div
          className={styles.headlineText}
          onClick={() => handlePageToggle(1)}
        >
          COMPLETED
        </div>
      </div>
      <div
        className={`${styles.highLighter} ${
          page===1 && styles.highLightCompleted
        } contestHighLighter`}
      ></div>
      <div {...handler} className={styles.contest}>
        <div className={`${styles.upcoming} ${page===1&&styles.upcomingPage}`}>
          {upcomingBattle}
        </div>
        <div className={styles.completed}>
          {completedBattle}
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
