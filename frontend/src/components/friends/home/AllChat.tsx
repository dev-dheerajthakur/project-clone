import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./styles/allChat.module.css";
import Link from "next/link";

const AllChat = () => {
  return (
    <div className={styles.allChat}>
      <div className={styles.newConversationTemplate}>Start Conversation !</div>
      <div className={styles.newChatBox}>
        <Link href="/friends/new-conversation">
          <Image height={60} width={60} alt="" src="/icons/new-chat.png" />
        </Link>
      </div>
    </div>
  );
};

const style: React.CSSProperties = {
  padding: "10px 20px",
  background: "#000",
  color: "#fff",
  border: "2px solid red",
};

export default AllChat;
