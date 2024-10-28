import React from 'react'
import styles from './layout.module.css'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.layout}>
        {children}
      </div>
    </>
  )
}

export default layout
