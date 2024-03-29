"use client"
import React, { useState } from 'react'
import styles from '@/styles/auth.module.css'
import Image from 'next/image'
import nouser from "@/assets/no_user.png"
const page = () => {
    const [PasswordVisible, setPasswordVisible] = React.useState(true)
    const [userimage,setUserImage]=useState<any>(null);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [dob,setDob]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=()=>{
        console.log("name",name);
        console.log("email",email);
        console.log("dob",dob);
        console.log("password",password);
        console.log("userimage",userimage);
    }
    return (
        <div className={styles.formpage}>
            <div className={styles.formcontainer}>
            <h1>Register</h1>
            <div className={styles.profilediv}
                onClick={()=>{
                    const input=document.createElement("input");
                    input.type="file";
                    input.accept="image/*"
                    input.onchange=(e)=>{
                        setUserImage(e.target.files[0]);
                    };
                    input.click();
                }}
            >
                { userimage?
                <Image  src={URL.createObjectURL(userimage)} alt="userimage" width={100} height={100}/>
                :
                <Image  src={nouser} alt="nouuser"width={100} height={100}/>

                }
            </div>
            <div className={styles.inputcontainer}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className={styles.inputcontainer}>
                <label htmlFor="">DOB</label>
                <input type="date"  onChange={(e)=>setDob(e.target.value)}/>
            </div>
            <div className={styles.inputcontainer}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputcontainer1}>
                <label htmlFor="">Password</label>
                <div className={styles.inputrow}>
                    <input placeholder='Password' type={PasswordVisible ? "text" : "password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {
                        PasswordVisible ?
                            <svg    onClick={()=>setPasswordVisible(false)}
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            :
                            <svg onClick={()=>setPasswordVisible(true)}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                    }
                </div>
                
            </div>

            <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default page
