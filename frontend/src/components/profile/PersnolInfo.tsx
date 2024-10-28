// "use client";
// import React, { useState } from "react";
// import styles from "./styles/persnolInfo.module.css";
// import Image from "next/image";
// import ProfileEditor from "./ProfileEditor";
// import { tree } from "next/dist/build/templates/app-page";

// const PersnolInfo = ({
//   name,
//   ffUid,
//   phone,
//   email,
//   userName,
// }: {
//   name: string;
//   ffUid: number;
//   phone: number;
//   email: string;
//   userName: string;
// }) => {
//   const profile = {
//     name,
//     ffUid,
//     phone,
//     email,
//     userName,
//   };
//   const [editor, setEditor] = useState(false);

//   const launchEditor = () => {
//     setEditor(true);
//   };

//   const closeEditor = () => {
//     setEditor(false);
//   };

//   const editorArray = [
//     {
//       name: "Name",
//       value: name,
//       png: "user",
//     },
//     {
//       name: "FF Uid",
//       value: ffUid,
//       png: "evaluation",
//     },
//     {
//       name: "User Name",
//       value: userName,
//       png: "job",
//     },
//     {
//       name: "Phone",
//       value: phone,
//       png: "support",
//     },
//     {
//       name: "Email",
//       value: email,
//       png: "email",
//     },
//   ];

//   return (
//     <>
//       <div className={styles.infoLable}>
//         Persnol information
//         <Image
//           onClick={launchEditor}
//           height={20}
//           width={20}
//           alt=" edit"
//           src="/icons/edit.png"
//           unoptimized
//         />
//       </div>
//       <div className={styles.infoContainer}>
//         <div className={styles.info}>
//           <span>Name</span>
//           {name}
//         </div>
//         <div className={styles.info}>
//           <span>FF-Uid</span>
//           {ffUid}
//         </div>
//         <div className={styles.info}>
//           <span>Phone</span>
//           {phone}
//         </div>
//         <div className={styles.info}>
//           <span>Username</span>
//           {userName}
//         </div>
//         <div className={styles.info}>
//           <span>Email</span>
//           {email}
//         </div>
//       </div>
//       <ProfileEditor
//         profile={profile}
//         editorArray={editorArray}
//         editor={editor}
//         closeEditor={closeEditor}
//       />
//     </>
//   );
// };

// export default PersnolInfo;


"use client";

import React, { useState } from "react";
import styles from "./styles/persnolInfo.module.css";
import Image from "next/image";
import ProfileEditor from "./ProfileEditor";

// Define TypeScript interface for props
interface PersonalInfoProps {
  name: string;
  ffUid: number;
  phone: number;
  email: string;
  userName: string;
  style ?: React.CSSProperties;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, ffUid, phone, email, userName, style }) => {
  const [editorOpen, setEditorOpen] = useState(false);

  const profile = { name, ffUid, phone, email, userName };

  const toggleEditor = () => {
    setEditorOpen((prevState) => !prevState);
  };

  // Create the editor array using map for cleaner code
  const editorArray = [
    { name: "Name", value: name, png: "user" },
    { name: "FF Uid", value: ffUid, png: "evaluation" },
    { name: "User Name", value: userName, png: "job" },
    { name: "Phone", value: phone, png: "support" },
    { name: "Email", value: email, png: "email" },
  ];

  return (
    <div style={style}>
      <div className={styles.infoLabel}>
        Personal Information
        <Image
          onClick={toggleEditor}
          height={20}
          width={20}
          alt="Edit"
          src="/icons/edit.png"
          unoptimized
          role="button"
          aria-label="Edit personal information"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && toggleEditor()}
        />
      </div>
      <div className={styles.infoContainer}>
        {editorArray.map(({ name, value }, index) => (
          <div className={styles.info} key={index}>
            <span>{name}</span>
            {value}
          </div>
        ))}
      </div>
      <ProfileEditor
        profile={profile}
        editorArray={editorArray}
        editor={editorOpen}
        closeEditor={toggleEditor}
      />
    </div>
  );
};

export default PersonalInfo;
