"use server";
import React from "react";
import styles from "./styles/notifications.module.css";
import { cookies } from "next/headers";
import { apiType } from "@/api/types/apiTypes";
import Link from "next/link";
import { getAllNotifications } from "@/api/notification/getAllNotifications";
import Image from "next/image";

const Notifications = async () => {
  const cookieStore = cookies();
  const Authorization = cookieStore.get("u_n_state")?.value;

  const json: apiType = await getAllNotifications({ Authorization });
  if (!json.success) {
    console.log(json.error);
  }
  const notifications: Array<any> = json.data;
  return (
    <div className={styles.notificationContainer}>
      <div>
        {notifications &&
          notifications.map((obj) => {
            return (
              <li className={styles.li} key={obj._id}>
                <span className={styles.notificationHeader}>{obj.n_type}</span>
                <div className={styles.notificationBody}>
                  New friend request from &nbsp;
                  <Link
                    style={{ textDecoration: "underline", color: "skyblue" }}
                    href={`/profile/${obj.from[0].userName}`}
                  >
                    {obj.from[0].userName}
                  </Link>
                  <span className={styles.actionBtn}>
                    <Image
                      height={11}
                      width={11}
                      alt="x"
                      src="/icons/close.png"
                    />
                  </span>
                  <span className={styles.actionBtn}>
                    <Image
                      height={13}
                      width={14}
                      alt="x"
                      src="/icons/check-mark.png"
                    />
                  </span>
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Notifications;
