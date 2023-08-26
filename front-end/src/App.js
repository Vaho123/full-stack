import React from "react";
import Login from './components/Login'
import Register from './components/Register'

// Need to import useState so we can use it later
// Will be using useEffect later, but not importing it now as it can cause errors
import { useState } from "react"

// This is where we will render all the components i.e. display them on screen
const App = () => {
	
//Need a state hook to save user credentials
// need to pass user down to login component (using props) - see ***
	  const [user, setUser] = useState()


	  
	/* display a welcome or please login message (use conditional rendering) */
	  return (

	    <div>

			<Register />
		
			<br></br>
			<br></br>

             {/* *** The user component is being passed down, here using props - props name is newUser
                we are sending the one which allows us to set - change - the user - who is logging in, so the value will change */}
          <Login newUser={setUser}/>

          {/* Need curly braces because we will be using JSX - allows us to add JS inside HTML 
            or, as here, use it for conditional rendering using ternary operators  - */}
         {/* If the user exists - or there is a value for user, welcome them by name, otherwise ask them to log in    */}
	       {user ? 
            <h2>Hello there!  Welcome {user}.  You have been logged in</h2> 
		     : 
	        <h2>Please log in</h2>
	        }
	    </div>
	  ); // App return
	}; // App

export default App;



