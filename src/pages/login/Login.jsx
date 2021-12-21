import { Link } from "react-router-dom"
import { useState } from "react";
import "./login.css"

export default function Login() {
    const [user,setUser]=useState({
        email:"",
        password:""
    })

    
  let name, value;
  const getUsersdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user,[name]: value})

  };


  
  const postInfo = async (e) => {
    e.preventDefault();

    const{email,password} =user;

    if(email&&password){

   
    const res = 
    await fetch("https://blogapp-c67b3-default-rtdb.firebaseio.com/bloglogin.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    if (res){
      setUser({
        email: "",
        password: ""
      });

      alert("Data Stored Successfully");

    }

  }else{
    alert("plz fill all the data");
      
  }
  };















    return (
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput"
             type="text"
              placeholder="enter your email here"
                name="email"
                value={user.email}  
                onChange={getUsersdata}
              />
            <label>Password</label>
            <input className="loginInput"
             type="password"
              placeholder="enter your password here"
                  name="password"
                  value={user.password}
                  onChange={getUsersdata}
              />
            <button className="loginButton"
            onClick={postInfo} 
            method="POST">Login</button>
        </form>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
        </button>
            
        </div>
    )
}
