import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../assets/firebase";

const Register = ({ changeForm }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });

        setEmail("")
        setPassword("")
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={() => changeForm("login")}>Already have an account.</button>
        </div>
    );
};

export default Register;