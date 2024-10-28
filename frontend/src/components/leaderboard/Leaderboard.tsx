"use client";

import React, { useState, useEffect } from "react";
import styles from './styles/leaderboard.module.css'
import Image from "next/image";

// Sample data type for leaderboard
interface User {
  rank: number;
  name: string;
  score: number;
  avatarUrl?: string;
}

const Leaderboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch leaderboard data (replace with your actual data fetching logic)
    const fetchLeaderboard = async () => {
      // Example data, replace with actual API call
      const data: User[] = [
        { rank: 1, name: "UN-DEFE4TED", score: 1500, avatarUrl: "/banner/banner_1.png" },
        { rank: 2, name: "RAISTAR", score: 1400, avatarUrl: "/banner/banner_2.png" },
        { rank: 3, name: "PAGAL M10", score: 1300, avatarUrl: "/banner/banner_4.png" },
        // Add more users as needed
      ];
      setUsers(data);
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className={styles.leaderboard}>
      <h1 className={styles.title}>Leaderboard</h1>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Rank</div>
          <div className={styles.headerCell}>Avatar</div>
          <div className={styles.headerCell}>Name</div>
          <div className={styles.headerCell}>Score</div>
        </div>
        {users.map(user => (
          <div key={user.rank} className={styles.tableRow}>
            <div className={styles.cell}>{user.rank}</div>
            <div className={styles.cell}>
              {user.avatarUrl ? (
                <Image src={user.avatarUrl} alt={`${user.name} avatar`} width={50} height={50} className={styles.avatar} />
              ) : (
                <div className={styles.avatarPlaceholder}>N/A</div>
              )}
            </div>
            <div className={styles.cell}>{user.name}</div>
            <div className={styles.cell}>{user.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
