import React from "react"
import { useState } from "react"
import { registerUser  } from "../utils"  


const Register = () => {

	    const [username, setUsername] = useState()
	    const [email, setEmail] = useState()
	    const [password, setPassword] = useState()
	
	   
	    const submitHandler = async (e) => {
	        e.preventDefault()
			// Console logs purely for demonstration purposes - can be taken out
	        console.log(username)
	        console.log(email)
	        console.log(password)
           
			// registerUser - from the utils folder
			// The function which makes the request to the BE
            await registerUser(username, email, password) 
	    }

	    return (
           
	        <div>
	        <h1>Please register:</h1>
	  
             
	        <form onSubmit = {submitHandler}>
	            <label>Username:
                    
	                <input onChange= {(e) => setUsername(e.target.value)} required></input>
	            </label>
	
	            <br></br>
	
	            <label>Email:
                              
	                <input onChange= {(e) => setEmail(e.target.value)} required></input>
	            </label>

	            <br></br>
	
               <label>Password:
	                <input type="password" onChange= {(e) => setPassword(e.target.value)} required></input>
	            </label>
		            <br></br>
	 
                
	            <button type="submit">Click to register</button>
	
	        </form>
	        </div>    
	) 
	
} 
	
export default Register
