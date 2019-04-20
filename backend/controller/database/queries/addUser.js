
const dbconnection = require('../connection.js');
const addUser = (firstName,lastName,email,password) => dbconnection.query('INSERT INTO users (first_name,last_name,email,password) values ($1,$2,$3,$4) returning *',[firstName,lastName,email,password]);
module.exports = addUser;