const dbconnection = require('../connection.js')
const getUser = email => dbconnection.query(`select * from users WHERE email=$1`,[email])
module.exports = getUser;