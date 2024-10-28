"use server";
import React from "react";
import styles from "./page.module.css";
import AllFriends from "@/components/friends/new-conversation/AllFriends";
import { getallFriends } from "@/api/friends/get-allFriends";
import { apiType } from "@/api/types/apiTypes";
import { cookies } from "next/headers";
import Titles from "@/components/temp/Titles";
import FriendsSearchBox from "@/components/temp/FriendSearchBox";
import jwt from "jsonwebtoken";
import { array } from "zod";

const jwtSecret = process.env.jwt_secret || "jwt secret is undefined";

const page = async () => {
  const cookieStore = cookies();
  const i_state = cookieStore.get("i_state")?.value;
  const u_state = cookieStore.get("u_n_state")?.value;

  const json: apiType = await getallFriends({ auth: i_state });
  const friends: Array<any> = json.data.friend_details;

  const createToken = async (member: string) => {
    "use server";
    
    const payload = {
      members: [`${u_state}`, member],
    };
    const token = jwt.sign(payload, jwtSecret);
    
    return token;
  };

  return (
    <div className={styles.newConversation}>
      <Titles home={false} title="New Conversation" />
      <FriendsSearchBox style={{ marginBottom: "10px" }} />
      <AllFriends friends={friends} createToken={createToken} />
    </div>
  );
};

export default page;
