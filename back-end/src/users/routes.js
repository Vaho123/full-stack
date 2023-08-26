const { Router } = require("express")

const userRouter = Router()

const {registerUser,getAllUsers, updateUser, deleteUser, login } = require("./controllers") 
const { hashPass, comparePass, tokenCheck} = require("../middleware")


userRouter.post("/users/register", hashPass, registerUser)
// userRouter.get("/users/getUsers", getAllUsers)

// this needs to be a post request because we need to send data
// In Thunderclient, sending data in a GET request works, 
//  BUT sending data in a GET request in REACT doesn't work
//  Therefore, if you want to send data use POST not get
// userRouter.post("/users/login", comparePass, login)

//We know this route works, therefore replacing comparePass with
userRouter.post("/users/login", comparePass, login)

userRouter.get("/users/getUsers", tokenCheck, getAllUsers) // protected endpoint

// userRouter.get("/users/authCheck", tokenCheck, login)

// userRouter.put("/users/updateUser", updateUser)

// userRouter.delete("/users/deleteUser", deleteUser)


//TODO: add rest of routes for each controller

module.exports = userRouter