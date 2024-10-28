import React from "react";
import styles from "./page.module.css";
import AllChat from "@/components/friends/home/AllChat";
import LoginRequired from "@/components/auth/login/LoginRequired";
import FriendsSearchBox from "@/components/temp/FriendSearchBox";
import Image from "next/image";
import NavigateBack from "@/hooks/Navigate.back";
import Titles from "@/components/temp/Titles";

const page = () => {
  return (
    <div className={styles.page}>
      <Titles title="Message" />
      <FriendsSearchBox />
      <AllChat />
      <LoginRequired>
        <div></div>
      </LoginRequired>
    </div>
  );
};

export default page;
