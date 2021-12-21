import { useState } from 'react';
 import { Link } from "react-router-dom"
 import "./register.css"
 import { db } from "./firebase"
 import { collection, addDoc } from 'firebase/firestore'

 export default function Register() {
     const [newName, setnewName] = useState("");
     const [newEmail, setnewEmail] = useState("");
     const [newPassword, setnewPassword] = useState("");

  const registrationCollectionRef = collection(db,"registration");


     const createUser = async () => {
        if(newName&&newEmail&&newPassword){

 const res=await addDoc(registrationCollectionRef,{ name:newName,email:newEmail,password:newPassword });
     
        
 alert("Data Stored Successfully");
  }
  else{
    alert("plz fill all the data");
      
  }
    
};
 


     return (
        <div className="register">
        <span className="registerTitle">Register</span>
          <form className="registerForm">
          <label>Username</label>
        <input
        className="registerInput"
         placeholder='Name...'
         onChange={(event)=>
        {setnewName(event.target.value)
        }}/>

       <label>Email</label>
        <input className="registerInput"
        placeholder='Email...'
         onChange={(event)=>
        {setnewEmail(event.target.value)
        }}/>

      <label>Password</label>
        <input
        className="registerInput"
         placeholder='Password...'
         onChange={(event)=>
        {setnewPassword(event.target.value)
        }}/>
        </form>
        
        <button className="registerButton"
        onClick={createUser}>REGISTER</button>

        <button className="registerLoginButton">
                 <Link className="link" to="/login">LOGIN</Link>
           </button>

        
        
        
          
        </div>
      );
    }
    
    










// import { useState } from 'react';
// import { Link } from "react-router-dom"
// import "./register.css"
// import { db } from "./firebase"
// import { collection, addDoc } from 'firebase/firestore'

// export default function Register() {
//     const [newName, setnewName] = useState("");
//     const [newEmail, setnewEmail] = useState("");
//     const [newPassword, setnewPassword] = useState("");

//  const registrationCollectionRef = collection(db,"registration");


//     const createUser = async () => {
// await addDoc(registrationCollectionRef,{ name:newName,email:newEmail,password:newPassword });
//     }





//     return (
//         <div className="register">
//             <span className="registerTitle">Register</span>
//             <form className="registerForm">
//                 <label>Username</label>
//                 <input className="registerInput"
//                     type="text"
//                     placeholder="enter your username here"
//                     name="name"
//                     onChange={(event) => {
//                         setnewName(event.target.value)
//                     }}
//                 />

//                 <label>Email</label>
//                 <input className="registerInput"
//                     type="email"
//                     placeholder="enter your email here"
//                     name="email"
//                     onChange={(event) => {
//                         setnewEmail(event.target.value)
//                     }}
//                 />

//                 <label>Password</label>
//                 <input className="registerInput"
//                     type="password"
//                     placeholder="enter your password here"
//                     name="password"
//                     onChange={(event) => {
//                         setnewPassword(event.target.value)
//                     }}
//                 />
//                 <button className="registerButton" onClick={createUser}>
//                     REGISTER</button>
//             </form>
//             <button className="registerLoginButton">
//                 <Link className="link" to="/login">LOGIN</Link>
//             </button>

//         </div>
//     )
// }