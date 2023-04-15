import React, { useState } from 'react';
import { auth } from "../config/firebase"
import { googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut , signInWithCredential } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import "../css/auth.css"
import { useNavigate } from 'react-router-dom';





export const Auth = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(auth?.currentUser?.email)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate('/dashboard')
        } else {
            // Mos bo kurgjo
        }
    });

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
            <a href='#' className='forgot'>Forgot password?</a>
            <div className='signup-container'>
            <button onClick={SignUp}className='sign-up'>Sign up</button>

            </div>
            <h3>or</h3>
            <div className="login">
                <button className="login-button"
                        onClick={googleSignUp}>
                    <img
                        src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227"
                        alt="Google logo"
                    />
                    
                </button>
            </div>

            <div className="g-signin2" data-width="300" data-height="200" data-longtitle="true"></div>
        </div>
    )
}

