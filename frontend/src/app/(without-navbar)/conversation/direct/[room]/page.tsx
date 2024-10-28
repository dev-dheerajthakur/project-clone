"use server";
import React from "react";
import styles from "./page.module.css";
import ChatBox from "@/components/chat/ChatBox";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const jwtSecret = process.env.jwt_secret || "jwt secret is undefined";

const page = ({ params }: { params: { room: string } }) => {
  const cookiStore = cookies().get("i_state")?.value;
  const parsedToken: any = jwt.decode(params.room);

  return (
    <div className={styles.room}>
      <ChatBox members={parsedToken.members} auth={cookiStore} />
    </div>
  );
};

export default page;
