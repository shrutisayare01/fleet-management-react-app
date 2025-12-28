import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setAuth}){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const emailRef=useRef(null);
    const navigate=useNavigate();

    useEffect(()=>{
        emailRef.current.focus();
    },[])

    const handleLogin=(e)=>{
        e.preventDefault();
        if(email==='admin@gmail.com' && password ==="admin1234"){
            alert('Login success');
            setAuth(true);
            navigate('/admin');
        }else{
            alert("Wrong email or password")
        }
    };


    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
            <input type="email" ref={emailRef} placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button type="submit">Login</button>
            </form>
        </div>
    )

}
export default Login;