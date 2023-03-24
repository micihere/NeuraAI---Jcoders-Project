import React, { useState } from 'react';
import {auth} from "../config/firebase"
import {googleProvider} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import "../css/auth.css"


export const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(auth?.currentUser?.email)
    const SignUp = async () => {
        try {

            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
    }

    const googleSignUp = async () => {
        try {

            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err)
        }
    }

    const logOut = async () => {
        try {

            await signOut(auth)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        
        <div className='container'>
            <h1>Create account</h1>
            <input
            placeholder="Email" type="email"
            onChange={(e) => setEmail(e.target.value)}
            className='inputs'
            />
            <input
             placeholder="Password" type="password"
             onChange={(e) => setPassword(e.target.value)}
             className='inputs'
             />
             <a href='#'>Forgot password?</a>
            <button onClick={logOut}>Log out</button>
            <button onClick={SignUp}>Sign up</button>
            <button onClick={googleSignUp}>Google</button>
            <div className="g-signin2" data-width="300" data-height="200" data-longtitle="true"></div>
        </div>
    )
}