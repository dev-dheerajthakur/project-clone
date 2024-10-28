"use client"
import React, { useState } from 'react'
import styles from './styles/register.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'
import Link from 'next/link'
import z from 'zod'
import toast from '@/scripts/toast'
import { apiType } from '@/api/types/apiTypes'

const Register = ({registerFunction} :{registerFunction :Function}) => {
  
  const router = useRouter();
  const [phone, setPhone] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [Name, setName] = useState<string>("")
  const [ffUid, setFfUid] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [userName, setUserName] = useState<string>("")

  const handleRegistration = async ()=>{
    const inputData = {
      name: Name,
      ffUid: parseInt(ffUid?ffUid:""),
      userName: userName,
      phone: parseInt(phone?phone:""),
      email: email,
      password: password
    };
    
    const inputSchema = z.object({
      phone: z.coerce.number({message: "Phone required!"}).min(999999999, {message: "Invalid phone!"}).max(9999999999, {message: "Invalid phone!"}),
      password: z.string({message: "Password required!"}).min(8, {message:"password must 8 character long!"}),
      name: z.string({message: "Name required!"}).min(3, {message: "Name shold 3 character long!"}),
      ffUid: z.coerce.number({message: "Uid reqired!"}),
      email: z.string({message: "Email required!"}).email({message: "Invalid email!"}),
      userName: z.string({message: "userName required!"})
    });

    const isInputValid = inputSchema.safeParse(inputData);
    if(isInputValid.error){
      toast(isInputValid.error.errors[0].message);
      return;
    };

    try {
      const json :apiType= await registerFunction({Name, phone, email, userName, ffUid, password});
      if(json.success){
        const user = json.data;
        setCookie("u_state", user);
        toast("Registration successfull !")
        router.push("/");
        router.refresh();
      }else{
        toast(json.error)
      }
    } catch (err:any) {
      toast(err.response?.data.message);
      // console.log(err.response.data.message);
      
    }
    

    // setCookie("user", "dheeraj", {})
    // router.push("/")
    // router.refresh()
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginChild}>
        <div className={styles.loginTitle}>Sign Up</div>
          <div className={styles.inputContainer}>
            <Image src="/icons/user.png" height={20} width={20} alt="user" />
            <input autoComplete='off' spellCheck={false} autoCorrect='off' value={Name} onChange={(e)=>{setName(e.target.value)}} id='loginPassword' type="text" placeholder="Name" />
          </div>
          <div className={styles.inputContainer}>
            <Image src="/icons/job.png" height={20} width={20} alt="user" />
            <input autoComplete='off' spellCheck={false} autoCorrect='off' value={ffUid} onChange={(e)=>{setFfUid(e.target.value)}} id='loginPassword' type="number" placeholder="FF Uid" />
          </div>
          <div className={styles.inputContainer}>
            <Image src="/icons/terminal.png" height={20} width={20} alt="user" />
            <input autoComplete='off' spellCheck={false} autoCorrect='off' value={userName} onChange={(e)=>{setUserName(e.target.value)}} id='loginPassword' type="text" placeholder="User Name" />
          </div>
          <div className={styles.inputContainer}>
            <Image src="/icons/support.png" height={20} width={20} alt="user" />
            <input autoComplete='off' spellCheck={false} autoCorrect='off' value={phone} onChange={(e)=>{e.target.value.length>10?'':setPhone(e.target.value)}} id='loginIdentifier' type="number" placeholder="phone" max={10} />
          </div>
          <div className={styles.inputContainer}>
            <Image src="/icons/attach.png" height={20} width={20} alt="user" />
            <input autoComplete='off' spellCheck={false} autoCorrect='off' value={email} onChange={(e)=>{setEmail(e.target.value)}} id='loginPassword' type="email" placeholder="Email" />
          </div>
          <div className={styles.inputContainer}>
            <Image src="/icons/high-score.png" height={20} width={20} alt="user" />
            <input autoCapitalize='none' autoComplete='off' spellCheck={false} autoCorrect='off' value={password} onChange={(e)=>{setPassword(e.target.value)}} id='loginPassword' type="text" placeholder="password" />
          </div>
          <div className={styles.submitContainer}>
            <Link className={styles.registerLink} href={"/login"}>Login?</Link>
            <button onClick={handleRegistration} type="submit" className={styles.submitButton}>Sign Up</button>
          </div>
      </div>
    </div>
  )
}

export default Register;
