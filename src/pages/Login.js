import React, { useState } from 'react'
import "../CSS/Login.css"
import axios from "axios"




function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const loginFunction = (e) => {
        e.preventDefault();
        let userLoginDetials = {}
        userLoginDetials.email = email;
        userLoginDetials.password = pass;

        console.log(userLoginDetials)
        axios.post("http://localhost:3001/login", userLoginDetials)
        .then((responce) => {
            localStorage.setItem("token", responce.data.data.token)
            localStorage.setItem("userId", responce.data.data.userId)
            alert("Login successfull")
        }).catch((err) => alert(err.message))
    }

    return (
        <>
            <div id='bigBox1'>

                <div className="headingLogin">
                    <h2 id="login">LOGIN</h2>
                </div>

                <div className="loginBox">

                    <form onSubmit={loginFunction}>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Write your email" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" required value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Write your password" />
                        </div>

                        <button type="submit" id='btn1' className="btn btn-primary">Login</button>

                        <div id="headingLogin">
                            <a href='/resister'>Resister</a>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default Login
