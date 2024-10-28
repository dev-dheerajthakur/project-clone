// // import React from 'react'
// // import styles from './styles/passwordAndSecurity.module.css'
// // import Image from 'next/image'

// // const PasswordAndSecurity = () => {
// //   return (<>
// //     <div className={styles.passwordAndSecuritylabel}>Password and Security
// //       {/* <Image height={20} width={20} alt=' edit' src="/icons/edit.png" unoptimized /> */}
// //     </div>
// //     <div className={styles.passwordAndSecurityContainer}>
// //     </div>
// //   </>)
// // }

// // export default PasswordAndSecurity


// "use client";

// import React, { useState } from "react";
// import styles from './styles/passwordAndSecurity.module.css'

// const PasswordSecurity: React.FC = () => {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handlePasswordChange = () => {
//     if (newPassword !== confirmPassword) {
//       setMessage("New passwords do not match.");
//       return;
//     }

//     // Simulate a password change operation
//     // This is where you'd call your API to update the password
//     setMessage("Password updated successfully!");
//   };

//   return (
//     <div className={styles.passwordSecurity}>
//       <h2 className={styles.h2}>Password & Security</h2>
//       <div className={styles.bgColorPart}>

//       <div className={styles.formGroup}>
//         <label className={styles.label} htmlFor="currentPassword">Current Password</label>
//         <input
//           className={styles.input}
//           type="password"
//           id="currentPassword"
//           value={currentPassword}
//           onChange={(e) => setCurrentPassword(e.target.value)}
//           placeholder="Enter current password"
//           />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label} htmlFor="newPassword">New Password</label>
//         <input
//           className={styles.input}
//           type="password"
//           id="newPassword"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           placeholder="Enter new password"
//           />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label} htmlFor="confirmPassword">Confirm New Password</label>
//         <input
//           className={styles.input}
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="Confirm new password"
//           />
//       </div>
//       <button className={styles.button} onClick={handlePasswordChange}>Update Password</button>
//       {message && <p className={styles.message}>{message}</p>}
//           </div>
//     </div>
//   );
// };

// export default PasswordSecurity;


"use client";

import React, { useState } from "react";
import styles from './styles/passwordAndSecurity.module.css'
import Image from "next/image";

const PasswordSecurity: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Password visibility state
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    // Simulate a password change operation
    setMessage("Password updated successfully!");
  };

  // Toggle password visibility
  const togglePasswordVisibility = (
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={styles.passwordSecurity}>
      <h2 className={styles.h2}>Password & Security</h2>
      <div className={styles.bgColoredSection}>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="currentPassword">Current Password</label>
        <div className={styles.passwordInputWrapper}>
          <input
            className={styles.input}
            type={showCurrentPassword ? "text" : "password"}
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            />
          <button
            type="button"
            className={`${styles.showHideButton}`}
            onClick={() => togglePasswordVisibility(setShowCurrentPassword)}
            >
            <Image
              src={showCurrentPassword ? "/icons/hide.png" : "/icons/show.png"}
              alt={showCurrentPassword ? "Hide" : "Show"}
              width={20}
              height={20}
              />
          </button>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="newPassword">New Password</label>
        <div className={styles.passwordInputWrapper}>
          <input
            className={styles.input}
            type={showNewPassword ? "text" : "password"}
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            />
          <button
            type="button"
            className={`${styles.showHideButton}`}
            onClick={() => togglePasswordVisibility(setShowNewPassword)}
            >
            <Image
              src={showNewPassword ? "/icons/hide.png" : "/icons/show.png"}
              alt={showNewPassword ? "Hide" : "Show"}
              width={20}
              height={20}
              />
          </button>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="confirmPassword">Confirm New Password</label>
        <div className={styles.passwordInputWrapper}>
          <input
            className={styles.input}
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            />
          <button
            type="button"
            className={`${styles.showHideButton}`}
            onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
            >
            <Image
              src={showConfirmPassword ? "/icons/hide.png" : "/icons/show.png"}
              alt={showConfirmPassword ? "Hide" : "Show"}
              width={20}
              height={20}
              />
          </button>
        </div>
      </div>

      <button className={styles.button} onClick={handlePasswordChange}>Update Password</button>
      {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default PasswordSecurity;

