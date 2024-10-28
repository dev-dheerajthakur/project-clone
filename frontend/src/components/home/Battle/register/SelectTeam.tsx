"use client";
import React from "react";
import styles from "./styles/selectTeam.module.css";
import Image from "next/image";
import Link from "next/link";

const SelectTeam = ({
  params,
  teams,
  you,
  updateMembers,
  children,
  selectedMembers,
}: {
  params: { battleId: string };
  teams?: any[];
  you: string | undefined;
  updateMembers: Function;
  selectedMembers: Set<string>;
  children?: React.ReactElement;
}) => {
  const openModal = () => {
    (document.querySelector("#modal") as HTMLDialogElement).showModal();
    const balckFilm = document.getElementById("registerBatteModalBlackFilm");
    if (!balckFilm) return;
    balckFilm.style.display = "block";
  };
  const closeModal = () => {
    (document.querySelector("#modal") as HTMLDialogElement).close();
    const balckFilm = document.getElementById("registerBatteModalBlackFilm");
    if (!balckFilm) {
      return;
    }
    balckFilm.style.display = "none";
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.openModalBtn} onClick={openModal}>
        <Image
          height={15}
          width={15}
          unoptimized
          alt="e"
          src="/icons/edit-pen.png"
        />
      </div>
      {/* <div id='registerBatteModalBlackFilm' onClick={closeModal} className={styles.blackFilm}></div> */}
      <dialog id="modal" className={styles.modal}>
        <div className={styles.selectTeamTemplate}>
          <span>
            Team members
            {children}
          </span>
          <div>
            <Link className={styles.addMemberLink} href="" >+add member</Link>
          </div>
        </div>
        <div className={styles.applyBtnBox}>
          <button onClick={closeModal} className={styles.applyBtn}>
            Apply
          </button>
        </div>
        <div>
          {teams?.map((team: any) => {
            return (
              <div key={team._id} className={styles.team}>
                <div>
                  {you === team.admin[0]?.userName ? (
                    <div className={styles.members}>
                      <div>
                        <div>
                          <Image
                            height={50}
                            width={50}
                            alt=""
                            src={team.admin[0]?.profile}
                          />
                          <Image
                            className={styles.selectedTemplate}
                            height={15}
                            width={15}
                            alt="/"
                            src="/icons/check.png"
                          />
                        </div>
                        <div className={styles.memberIdentity}>
                          {team.admin[0].userName}
                          {you === team.admin[0]?.userName && (
                            <span
                              style={{
                                color: "#008ac0",
                                fontWeight: 700,
                                marginLeft: "10px",
                              }}
                            >
                              (You)
                            </span>
                          )}
                          <div>{team.admin[0]?.ffUid}</div>
                        </div>
                      </div>
                      {/* <div className={styles.adminTemplates}>leader</div> */}
                    </div>
                  ) : (
                    <div>
                      <div>
                        {team.members.map((member: any) => {
                          if (you === member.userName) {
                            return (
                              <div
                                key={member.userName}
                                className={styles.members}
                              >
                                <div>
                                  <div className={styles.memberProfileSection}>
                                    <Image
                                      className={styles.memberProfile}
                                      height={50}
                                      width={50}
                                      alt=""
                                      src={team.admin[0]?.profile}
                                    />
                                    <Image
                                      className={styles.selectedTemplate}
                                      height={15}
                                      width={15}
                                      alt="/"
                                      src="/icons/check.png"
                                    />
                                  </div>
                                  <div className={styles.memberIdentity}>
                                    {member.userName}
                                    {you === member.userName && (
                                      <span
                                        style={{
                                          color: "#008ac0",
                                          fontWeight: 700,
                                          marginLeft: "10px",
                                        }}
                                      >
                                        (You)
                                      </span>
                                    )}
                                    <div>{member.ffUid}</div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                      <div
                        onClick={() => {
                          updateMembers(team.admin[0]?.userName);
                        }}
                        className={styles.members}
                      >
                        <div>
                          <div className={styles.memberProfileSection}>
                            <Image
                              className={styles.memberProfile}
                              height={50}
                              width={50}
                              alt=""
                              src={team.admin[0]?.profile}
                            />
                            {selectedMembers?.has(team.admin[0]?.userName) && (
                              <Image
                                className={styles.selectedTemplate}
                                height={15}
                                width={15}
                                alt="/"
                                src="/icons/check.png"
                              />
                            )}
                          </div>
                          <div className={styles.memberIdentity}>
                            {team.admin[0]?.userName}
                            {you === team.admin[0]?.userName && (
                              <span>&nbsp;(You)</span>
                            )}
                            <div>{team.admin[0]?.ffUid}</div>
                          </div>
                        </div>
                        {/* <div className={styles.adminTemplates}>leader</div> */}
                      </div>
                    </div>
                  )}
                  <div>
                    {team.members.map((member: any) => {
                      if (you !== member.userName) {
                        return (
                          <div
                            onClick={() => {
                              updateMembers(member.userName);
                            }}
                            key={member.userName}
                            className={styles.members}
                          >
                            <div>
                              <div className={styles.memberProfileSection}>
                                <Image
                                  className={styles.memberProfile}
                                  height={50}
                                  width={50}
                                  alt=""
                                  src={team.admin[0]?.profile}
                                />
                                {selectedMembers?.has(member.userName) && (
                                  <Image
                                    className={styles.selectedTemplate}
                                    height={15}
                                    width={15}
                                    alt="/"
                                    src="/icons/check.png"
                                  />
                                )}
                              </div>
                              <div className={styles.memberIdentity}>
                                {member.userName}
                                {you === member.userName && (
                                  <span>&nbsp;(You)</span>
                                )}
                                <div>{member.ffUid}</div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </dialog>
    </div>
  );
};

export default SelectTeam;
