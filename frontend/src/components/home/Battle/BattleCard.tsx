import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './style/BattleCard.module.css'
// import { isLogin } from "@/hooks/isLogin";
import { cookies } from "next/headers";

function share() {
  // Check if the Web Share API is supported
  if (navigator.share) {
    navigator
      .share({
        title: "Web Share API Example",
        text: "Check out this awesome content!",
        url: "https://example.com",
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    alert("Web Share API is not supported in this browser.");
  }
}

const BattleCard = ({
  battle,
}: {
  battle: {
    _id: string;
    battleId: number;
    settings: {
      map: string;
      ammo: string;
      teamMode: string;
      gameMode: string;
      gunAttributes: string;
      chatacterSkill: string;
      loadout: string;
      slots: number;
    };
    expire: {
      id: number;
      year: number;
      month: number;
      date: number;
      hour: number;
      minute: number;
      second: number;
    };
    entry: number;
    winning: { _1: number; _2: number; _3: number };
    createdAt: { $date: string };
    teams: any;
    __v: number;
  };
}) => {
  const {
    _id,
    battleId,
    expire: { id, year, month, date, hour, minute, second },
    entry,
    settings: { ammo, teamMode, map, gameMode, slots },
    winning: { _1 },
    teams,
  } = battle;

  const cokkieStore = cookies();
  const isLogin = cokkieStore.get("u_state");

  return (
    <div className={`${styles.battle_card} ${styles.section}`}>
      <div className={styles.battle_card_header}>
        {gameMode} &nbsp; [{map}]
        <Image
          // onClick={share}
          style={{ cursor: "pointer" }}
          height={17}
          width={17}
          src="/icons/share.png"
          alt="share"
        />
      </div>
      <Link href={`/battle/${_id}`}>
        <div className={styles.battle_card_section_1}>
          <div className={styles.battle_card_img}>
            {/* <Kalahari /> */}
            <Image
              src={`/maps/${map}.png`}
              width={140}
              height={73}
              alt="battle_card_thumbnail"
              className={styles.battle_card_thumbnail}
            />
          </div>
          <div className={styles.battle_card_info}>
            <div className={styles.battle_card_info_header}>
              {teamMode} {ammo} #{year}
            </div>
            <div className={styles.battle_card_date_section}>
              {/* {date} */}
              27 June, 2024 | 17:00
              <div className={styles.battle_card_info_organiser}>
                organised by admin
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.battle_card_section_2}>
        <Link
          href={isLogin ? `/battle/checkout/${_id}` : "/login"}
          className={`${!isLogin && styles.disable_light} ${
            teams.length >= slots && styles.disable
          } ${styles.battle_card_btn}`}
        >
          Join now - {entry}
        </Link>
        <Link href={`/battle/${_id}`}>
          <div className={styles.battle_card_winnings}>
            <Image
              width={33}
              height={27}
              src="/icons/trophy.png"
              alt="winnings"
            />
            &nbsp;{_1}-/
          </div>
        </Link>
      </div>
      <Link href={`/battle/${_id}`}>
        <div className={styles.battle_card_footer}>
          <span className={styles.battle_card_count}>
            {teams.length}/{slots}
          </span>
          <div className={styles.battle_card_outliner}>
            <div
              className={styles.battle_card_outliner_count}
              style={{ width: (teams.length * 100) / slots + "%" }}
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BattleCard;
