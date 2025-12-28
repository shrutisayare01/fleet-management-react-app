import React, { useEffect, useRef, useState,useNavigate } from "react";

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
            navigate();
        }else{
            alert("Wrong email or password")
        }
    };


    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
            <input type="email" ref={emailRef} placeholder="Enter Email" value={email}/>
            <br/>
            <input type="password" placeholder="Enter Password" value={password}/>
            <br/>
            <button type="submit">Login</button>
            </form>
        </div>
    )

}
export default Login;