const  User = require ("./model") 

const jwt = require("jsonwebtoken")


const registerUser = async (req, res) => {
    try { 
        console.log("next called and inside controller")
        // const user = await User.create({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: req.body.password
        // });
        const user = await User.create(req.body)
        res.status(201).json({
            message: "success",
            user: {username: req.body.username, email: req.body.email, password:req.body.password}
        })
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}


const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();

      // remove passwords from users object
      // for (let user of users) {
      //   user.password = "";
      // }

      res.status(200).json({ message: "success", users: users });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }
};

//Uses variable ???s
// {
//     "username" : "User1",
//     "updateKey" : "email",
//     "updateValue" : "user1@email.com"
// }
const updateUser = async (req, res) => {
    try {
      const updateResult = await User.update(
        { [req.body.updateKey]: req.body.updateValue },
        { where: { username: req.body.username } }
      );
  
      res.status(201).json({ message: "success", updateResult: updateResult });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }
};

const deleteUser = async (req, res) => {
    try {
      const result = await User.destroy({
        where: {
          username: req.body.username,
        },
      });
      res.status(202).json({ message: "success", result });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }
  }; 

//   {
//     "username" : "Pete",
//     "email": "pete@email.com",
//     "password": "password"
//   }
const login = async (req, res) => {
    try {
      console.log ("********** Saying hi from the login controller")

        //                 the id we code into the token
        // this is the one line which will generate the token - a good use of librarites
      const token = await jwt.sign({id: req.user.id}, process.env.SECRET);
     // const token = await jwt.sign(1, process.env.SECRET)
      console.log ("********* token = ", token)

      // res.status(202).json({ message: "success", result });

      res.status(200).json({
            message: "success",
            user: {
              username: req.user.username,
              email: req.user.email,
              token:token
            }
          })
        
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }

    
}


module.exports = {
  registerUser,
   getAllUsers,
   updateUser,
   deleteUser,
   login
}