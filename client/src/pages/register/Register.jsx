import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
  
    
  

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    try{
        e.preventDefault();
        console.log("hii")
        const res = await axios.post("/auth/register",{
            username,
            email,
            password
        })
    }
    catch(e){
        console.log(e)
    }
  }
 

  return (
    <div className="login">
      <div className="lContainer">
       
        <input
          type="text"
          value={username}
          onChange = {(e)=> setUsername(e.target.value)}
          placeholder="username"
          id="username"
         
          className="lInput"
        />
        <input
        type="text"
        placeholder="email"
        id="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
       
        className="lInput"
      />
      
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e)=> setPassword(e.target.password)}
          className="lInput"
        />
        <button  className="lButton" onClick={handleSubmit}>
          Register
        </button>
       
      </div>
    </div>
  );
};

export default Register;