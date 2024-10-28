"use client";

import UserTemplates from "@/components/temp/UserTemplates";
import React from "react";

// Define the type for the friend object
interface FriendType {
  ffUid: number;
  profile: string;
  userName: string;
}

// Define the component's props type for clarity and maintainability
interface SelectMembersProps {
  Friends?: FriendType[];
}

// Function to handle a request action
const handleRequest = async ({ to }: { to: string }) => {
  try {
    // Placeholder for API request logic
    return{data : `Request sent to ${to} !devmod`}
  } catch (error) {
    return{error : `Failed to send request to ${to}:`+ error}
  }
};

// SelectMembers component
const SelectMembers: React.FC<SelectMembersProps> = ({ Friends }) => {
  return (
    <div style={styles.container}>
      {Friends?.map((friend :FriendType) => (
        <UserTemplates
          onClick={() => {}}
          style={styles.userTemplateStyle}
          key={friend.ffUid}
          dimension={50}
          user={friend}
          requestBtn
          requestFun={() => handleRequest({ to: friend.userName })}
          requestBtnImg="/icons/plus.png"
          style2={styles.requestBtnStyle}
        />
      ))}
    </div>
  );
};

// Encapsulate styles in a constant to separate styling from logic
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: "20px",
  },
  userTemplateStyle: {
    cursor: "pointer",
    margin: "10px"
  },
  requestBtnStyle: {
    scale: 0.8,
    opacity: 0.7,
  },
};

export default SelectMembers;
