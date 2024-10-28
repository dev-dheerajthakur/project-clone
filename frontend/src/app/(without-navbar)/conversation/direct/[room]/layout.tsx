import Header from "@/components/chat/Header";
import React from "react";
import styles from "./layout.module.css";
import { cookies } from "next/headers";

import jwt from "jsonwebtoken";
import NotFoundPage from "@/components/hooks/404";
const jwtSecret = process.env.jwt_secret || "jwt secret is undefined";

interface LayoutProps {
  children: React.ReactElement;
  params: { room: string };
}

const Layout = ({ children, params }: LayoutProps) => {
  const u_n_state = cookies().get("u_n_state")?.value;

  try {
    const parsedToken: any = jwt.verify(params.room, jwtSecret);

    if (parsedToken.members.length > 2) {
      throw new Error("Page not found");
    }

    const verified = parsedToken.members.includes(u_n_state);

    if (verified) {
      const member2 = parsedToken.members.find(
        (member: string) => member !== u_n_state
      );

      return (
        <div className={styles.layout}>
          <div className={styles.headerBox}>
            <Header name={member2 || ""} />
          </div>
          <div className={styles.childrens}>{children}</div>
        </div>
      );
    } else {
      return <NotFoundPage />;
    }
  } catch (error) {
    return <NotFoundPage />;
  }
};

export default Layout;
