import React from 'react';
import Link from 'next/link';
import styles from './styles/404.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <Link href="/" className={styles.homeButton}>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
