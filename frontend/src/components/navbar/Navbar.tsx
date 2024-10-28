import React from 'react'
import Hamburger from './Hamburger'
import Profile from './Profile'
import styles from './styles/navbar.module.css'

const Navbar = () => {
  
  return (
    <div className={styles.navbar}>
      <Hamburger />
      <div className={styles.rightComponent}>
        <Profile/>
      </div>
    </div>
  )
}

export default Navbar
