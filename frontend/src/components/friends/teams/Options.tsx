import React from "react";
import styles from "./styles/options.module.css";
import Image from "next/image";
import Link from "next/link";

const Options = () => {
  return (
    <div className={styles.options}>
      <div className={styles.optionBtn}>
        <Image height={20} width={20} alt="" src="/icons/user.png" />
      </div>
      <div className={styles.optionBtn}>
        <Image height={20} width={20} alt="" src="/icons/chat.png" />
      </div>
      <div className={styles.optionBtn}>
        <Image height={20} width={20} alt="" src="/icons/cart.png" />
      </div>
      <div className={styles.optionBtn}>
        <Link href="/team/add">
          <Image height={20} width={20} alt="" src="/icons/add-friend.png" />
        </Link>
      </div>
    </div>
  );
};

export default Options;
