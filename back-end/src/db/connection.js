// use object destructuring to import sequelize
const { Sequelize } = require("sequelize")

//  capital S                    connection URI in .env  - from sequelize
// caps MYSQL_URI i.e. must match what is in the .env file
const connection = new Sequelize(process.env.MYSQL_URI)

connection.authenticate()

// To show the connection is working
console.log("DB connection is working")

// To give access to this connection file from outside of this file
module.exports = connection
