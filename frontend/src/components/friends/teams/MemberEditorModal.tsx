import React from 'react'
import styles from './styles/memberEditorModal.module.css'

const MemberEditorModal = ({
  member,
  open ,
  setOpen
} :{ 
  member : string
  open ?:boolean
  setOpen ?: any
}) => {
  const closeModal = (e :any)=>{
    if(e.target===e.currentTarget) setOpen(false);
  }  
  return (
    <div onClick={closeModal} className={`${styles.modalContainer} ${open&&styles.show}`}>
      <div className={styles.modal}>
        <div className={styles.prompts}>Message {member}</div>
        <div className={styles.prompts}>Make group admin</div>
        <div className={styles.prompts}>Transfer leadership</div>
        <div className={styles.prompts}>Remove {member}</div>
      </div>
    </div>
  )
}

export default MemberEditorModal
