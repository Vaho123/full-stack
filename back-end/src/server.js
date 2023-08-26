require("dotenv").config()
const express = require("express")
const cors = require("cors")

	
//Either use the port from the environment variables
// but if one doesn't exist, use port 5001
// || is just the OR operator
const port = process.env.PORT || 5001 // could use 5002 if Ss have problems with 5001

const userRouter = require("./users/routes")
const User = require("./users/model")

const app = express()
// This will allow the server to accept requests from any origin
// In business not secure, so you would want to tell it to only accept requests from specific origins
// but OK for us for now
app.use(cors()) 


app.use(express.json())  // req and res will be sent and received in JSON
	
// What syncTables does
//     If the tables don't already exist, they will be created
//     If they do exist, they will be updated
const syncTables = () => {
	  // User, with capital U because being imported (line 11 above) from model.js with a capital U ( and exported from model.js with a capital U)
	   User.sync()
}

// We now need to tell nthe server where the routes are, so when it sees the endpoint, it knows what to go/where to go
app.use(userRouter)


app.get("/health", (req, res) => {
                    //  json uses key:  value pairs
	    res.status(200).json({message: "API is working"})
}
	
)

	
app.listen (port, () => {
	    syncTables()
	   console.log(`Sever is running on port ${port}`)
})
