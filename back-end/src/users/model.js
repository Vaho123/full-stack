const{ DataTypes } = require("sequelize")
const connection = require("../db/connection")


// Ask Ss what fields we might want on the DB if we want to sign up for an account 
//      answer username, email, password - so that's what we're ging to set up now

// Model name is User.  Capital U because it is a class
// Sequelize pluralises this so on DB it will be Users
                             // "TableUser" is table name - Table for teaching/demo purposes only, can just call in User
const User = connection.define("TableUser", {
     username: {
        type: DataTypes.STRING,
        allowNull: false
        // (,unique: true) Needs to be unique - is coming line 29
     },
     email:{
        type: DataTypes.STRING,
        allowNull: false
        // (, unique: true) Needs to be unique - is coming line 29
     },
     password:{
        type: DataTypes.STRING,
        allowNull: false
     }
},
    // Needs to be outside the definitions of the fields
    //SQL to make username and email unique - save writing unique: true three times
    // indexes is an array of objects
    // indexes - username, email, password
    {indexes: [{unique: true, fields: ["username", "email"] }]}

)

module.exports = User
