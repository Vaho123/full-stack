// For every route in BE, we need to write a function to make that request (so far we have been using ThunderClient to make the requests)

// Login user - request

// We are going to need access to this outside of this file, so we need to export it
// Because we are using React, we need to export functions slightly differently from in the REST API
// We're exporting what we are currently just console loggin in the submit handler
// And also exporting the newUser prop
export const loginUser = async (username, email, password, newUser) => {
    
    try {
 
         // To make the actual request, we use the fetch() function
         // (Similar to the request in cats4lyf project)
         // Inside fetch() we have the URL which the request will be made on
         //  The URL is the same as we would use in ThunderClient -
         // i.e. it is the endpoint we set up in routes.js (BE)
         // e.g. http://localhost:5001/ + endpoint (/users/login)
         // So http://localhost:5001/users/login is the URL we will make the request to the REST API on
         // Later we will store http://localhost:5001/ in the .env file, but we'll go with this for now (for teaching purposes)
         const response = await fetch("http://localhost:5001/users/login", {
             // First we need to tell the request what METHOD we will be using (just like in ThunderClient)
             // We write these in key:value pairs - like JSON
             method: "POST",
             headers: {
                 // Tells the REST API the request (body) will be sent in JSON, and the response should also be in JSON (other data types could be used)
                 "Content-Type": "application/json" // ThunderClient did this for us, React doesn't do it so we have to
             },
             // Same as we put in the body in ThunderClient
             // We wrote the JSON in ThunderClient, here we tell the request to turn it into JSON strings for us
             // We're using JSON so we can use it in the REST API
             body: JSON.stringify({
                 "username": username,
                 "email": email,
                 "password": password
             })
 
         })
 
         // When a user logs in, the request is sent , via (BE) routes.js, to the login controller
         // which is sends the response BE, users/controllers/login lines 87 - 94
         // Therefore we need a way of capturing that response here in the FE so we can view it on the screen
        // The line const response = await fetch(... (21) stores the response from the BE
        // That response is in JSON format, therefore we need tje .json() method
         const data = await response.json()
         console.log("Data returned from BE - ", data)
        // To add the user name which has just been entered to the message at the bottom
        // newUser has been passed down from App.js
        // Can see strucure in inspect/console
        newUser(data.user.username)
 
     }  catch (error) {
             console.log(error)
     }// try catch
 } // loginUser
 
 export const registerUser = async (username, email, password, newUser) => {
     
     try {
  
          const response = await fetch("http://localhost:5001/users/register", {
 
              method: "POST",
              headers: {
                 
                  "Content-Type": "application/json" 
              },
 
              body: JSON.stringify({
                  "username": username,
                  "email": email,
                  "password": password
              })
  
          })
  
 
          const data = await response.json()
          console.log("Data returned from BE - ", data)
 
  
      }  catch (error) {
              console.log(error)
      }// try catch
  } // registerUser
  