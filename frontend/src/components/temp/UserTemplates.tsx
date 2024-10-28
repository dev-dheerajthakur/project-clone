"use client";

import React from "react";
import styles from "./styles/userTemplates.module.css";
import Image from "next/image";
import { apiType } from "@/api/types/apiTypes";
import toast from "@/scripts/toast";

// Define interfaces for props to improve type safety and readability
interface User {
  userName: string;
  ffUid?: number;
  profile: string;
}

interface UserTemplatesProps {
  user: User;
  dimension: number;
  alt?: string;
  pic?: boolean;
  picReplacer?: string;
  requestBtn?: boolean;
  requestBtnImg?: string;
  requestFun?: Function;
  style?: React.CSSProperties;
  style2?: React.CSSProperties;
  onClick: (user: User) => void;
}

const UserTemplates: React.FC<UserTemplatesProps> = ({
  user,
  dimension,
  alt = "_",
  style,
  style2,
  requestBtn = false,
  requestBtnImg = "/icons/add-friend.png",
  requestFun,
  pic = true,
  picReplacer,
  onClick,
}) => {
  // Handle request creation with error handling
  const handleRequest = async () => {
    if (requestFun) {
      try {
        const response = await requestFun();
        if (response.data) {
          toast(response.data);
        } else if (response.error) {
          toast(response.error);
        } else {
          toast("Unknown error occurred.");
        }
      } catch (error) {
        toast("An error occurred while sending the request.");
      }
    }
  };

  // Render user profile picture or a placeholder
  const renderProfilePicture = () => {
    if (pic) {
      return (
        <Image
          className={styles.userProfile}
          height={dimension}
          width={dimension}
          alt={alt}
          src={user.profile}
        />
      );
    }
    return <div className={styles.userProfile}>{picReplacer}</div>;
  };

  return (
    <div
      onClick={() => onClick(user)}
      style={style}
      className={styles.userTemplate}
    >
      <div className={styles.userProfileSection}>
        {renderProfilePicture()}
        <div>
          <div className={styles.userName}>{user.userName}</div>
          {user.ffUid && <div className={styles.uid}>{user.ffUid}</div>}
        </div>
      </div>
      {requestBtn && (
        <div onClick={handleRequest} className={styles.reqBtn}>
          <Image
            style={style2}
            width={20}
            height={20}
            alt="Request"
            src={requestBtnImg}
          />
        </div>
      )}
    </div>
  );
};

export default UserTemplates;
