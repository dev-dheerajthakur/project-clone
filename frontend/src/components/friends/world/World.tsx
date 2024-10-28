"use client";
import React, { useState } from "react";
import styles from "./styles/world.module.css";
import Image from "next/image";
import UserTemplates from "@/components/temp/UserTemplates";
import { apiType } from "@/api/types/apiTypes";
import axios from "axios"; 

interface sampleUserInterface {
  ffUid: number;
  profile: string;
  userName: string;
}
const World = ({
  sampleUsers,
  findUser,
  friendRequestFunction
}: {
  sampleUsers: sampleUserInterface[];
  findUser: Function;
  friendRequestFunction :Function;
}) => {
  const [inpValue, setInpValue] = useState("");
  const [users, setUsers]: any[] = useState();
  const [userNotFound, setUserNotFound] = useState(false);

  const updateUser = (e: any) => {
    setInpValue(e.target.value);
    if (e.target.value < 1) {
      setUsers();
      setUserNotFound(false);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const json: apiType = await findUser(inpValue);
    if (json.data) {
      setUsers(json.data.users);
    } else {
      setUsers();
      setUserNotFound(true);
    }
    e.target.children[1].blur();
  };

  return (
    <div className={styles.world}>
      <form onSubmit={onSubmit} className={styles.form}>
        <Image height={17} width={17} alt="" src="/icons/magnifier.png" />
        <input
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          className={styles.inputField}
          type="search"
          placeholder="userName or uid"
          onChange={updateUser}
        />
      </form>

      <div className={styles.samples}>
        {users ? (
          users.map((user: sampleUserInterface) => {
            return (
              <div key={user.userName}>
                <UserTemplates
                onClick={()=>{}}
                  style={{ margin: "12px" }}
                  dimension={45}
                  user={{
                    userName: user.userName,
                    ffUid: user.ffUid,
                    profile: "/men.png"
                  }}
                  alt="x"
                  requestBtn
                  requestFun={friendRequestFunction}
                />
              </div>
            );
          })
        ) : userNotFound ? (
          <div> &nbsp; &nbsp;&nbsp;&nbsp; user not found </div>
        ) : (
          <div>
            <div className={styles.sampleTemplates}>people you may know</div>
            <div>
              {sampleUsers.map((user: sampleUserInterface) => {
                return (
                  <div key={user.userName}>
                    <UserTemplates
                      onClick={()=>{}}
                      style={{ margin: "12px" }}
                      dimension={45}
                      user={{
                        userName: user.userName,
                        ffUid: user.ffUid,
                        profile: "/men.png"
                      }}
                      alt="x"
                      requestBtn
                      requestFun={friendRequestFunction}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default World;
