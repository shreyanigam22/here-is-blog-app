import { useState } from "react";
import "./write.css"

export default function Write() {

    const [user,setUser]=useState({
      title:"",
      write:""
  })

  
let name, value;
const handleChange = (event) => {
  name = event.target.name;
  value = event.target.value;

  setUser({ ...user,[name]: value})

};



const handleUpload =(e) => {
  e.preventDefault();

  const file=e.target[0].file[0];
  console.log(file)
  
};






    return (
        <div className="write">
        <img className="writeImg" src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        alt=""/>
        <form className="writeForm">
            <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus-square"></i>

            </label>
                <input type="file"
                 id="fileInput"
                  style={{display:"none"}}
                      name="file"
                  />
                <input type="text"
                 placeholder="Title" 
                 className="writeInput"
                 name="title"
                 onChange={handleChange}
                 value={user.title} 
                    autoFocus={false}
                />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story"
                 type="text" 
                 className="writeInput writeText" 
                 name="write"
                 value={user.write} 
               onChange={handleChange}>
          </textarea>
            </div>
            <button className="writeSubmit"
            onClick={handleUpload}
             method="POST">Publish</button>
        </form>
            
        </div>
    )
}
