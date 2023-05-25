import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 

export default function Register(){

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    

  
    async function registerUser(ev){
      ev.preventDefault();
      try {
          await axios.post('/auth/register',{username,email,password});
          alert("Welcome registration successful now you can log in")
      }catch (e){
          alert(" registration failed , please try again");

      }
  }

  

    return (
        <div className="Rcontainer">
          <div className="login-box">

          
           
                <h1 className="login-heading">Register</h1>
           <form className="login-form" onSubmit={registerUser} >
              <label>Username :</label>
              <input type="text" className="login-input"  placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)} />
              <label>E-mail :</label>
              <input type="email" className="login-input" placeholder="E-mail" value={email}  onChange={ev => setEmail(ev.target.value)}/>
              <label>password :</label>
              <input type="password" className="login-input" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)}/>

              <button className="login-button"> Register </button>
              <p> Allready a member ? 
                <Link  className="login" to={'/login'}> Login </Link>
              </p>
            </form> 
          </div>
        </div>
        
    )
}