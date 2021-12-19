import React ,{useState} from "react";
import "./form.css"


import  {Link, useHistory}  from "react-router-dom";

import { auth, signInWithEmailAndPassword} from "../router/firebase";

function Signin() {
  const  [email, setemail]=useState("")
  const  [password, setpassword]=useState("")
 
  const history = useHistory(); 


 
    const sign = async () => {
      try {
          await signInWithEmailAndPassword(auth, email, password);
          history.push("./Reqtab")
              
              
          } catch (err) {
              
        console.log(err)
          }
      }

    return (
        <div>

        <div>

          
         
            <div className="center">
      <h1>Login</h1>

   
        <div className="form">
          
        <div className="txt">
          <input value={email}   onChange={(ev) => { setemail(ev.target.value) }} type="text" required />
          <span></span>
          <label for="Username" >E-mail</label>
        </div>
        <div className="txt">
          <input value={password} onChange={(ev) => { setpassword(ev.target.value) }} type="password" required />
          <span></span>
          <label for="Password">Password</label>
        </div>
        
      <button className="submit"  onClick={sign}> Login</button>
        <div>


        </div>
        </div>
    </div>
           
        </div>
        </div>

        
    )
}

export default Signin;