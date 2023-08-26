import React from "react"
import { useState } from "react"
import { loginUser  } from "../utils"  // Don't need a file name here because we're using index.js

// use props from App.js (name must match - line 21)
const Login = ({newUser}) => {
// use statehooks to hold the data to be passed to backend
	    const [username, setUsername] = useState()
	    const [email, setEmail] = useState()
	    const [password, setPassword] = useState()
	
	    // Makes a request to REST API which in turn makes a request to the DB, therefore needs to be async
	    // Need to pass e (event) so we can use e.prevent - because we need to prevent the default refreshing of the sreen (we are using statehooks, so we don't want this to happen)
	    const submitHandler = async (e) => {
	        e.preventDefault()
	        console.log(username)
	        console.log(email)
	        console.log(password)
            // Now we need to call loginUser
            // What's wrong with this?
            // await loginUser(username, password, email, newUser) // password would show up in the email field!
            // What would happen here?
            // await loginUser(email, username, password, newUser) // it would look for a user with username of the email, not find it and the user would not be able to login
            await loginUser(username, email, password, newUser) // order is important - must match what is set up in index.js, response, body (lines 33 - 35)
	    }
	
	    // Use the onChange event to set the values stored above
	   // e is short for event
	    return (
            // React states that elements must have a parent element, hence this div
	        <div>
	        <h1>Please login:</h1>
	  
               {/* Clicking the button (yet to be written) will call the submitHandler function (above)*/}
	        <form onSubmit = {submitHandler}>
	            <label>Username:
                    {/* Whatever the user types in, will be used in the body of the request
                      i.e. the request which will be sent to the REST API 
                      Therefore, we need to capture what the user enters - see state hooks, lines 7-9 above
                      Here, we are setting those state hooks on the onChange event 
                          (similar to onClick i.e. when it - change in the input box or click - 
                             happens, the state changes) 
                             e is the event - best practice to use e
                             setting username to e.target.value */}
	                <input onChange= {(e) => setUsername(e.target.value)}></input>
	            </label>
	
	            <br></br>
	
	            <label>Email:
                              {/* copy above and change to setUsername to setEmail */}
	                <input onChange= {(e) => setEmail(e.target.value)}></input>
	            </label>

	            <br></br>
	
               <label>Password:
	                <input onChange= {(e) => setPassword(e.target.value)}></input>
	            </label>
		            <br></br>
	 
                {/* To ensure the button works with the form, we need type submit, so it fires when clicked */}
	            <button type="submit">Click to submit</button>
	
	        </form>
	        </div>    
	) // login return
	
} // Login
	
export default Login
