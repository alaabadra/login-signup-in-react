const router = require('express').Router();
const signupVerification = require('./middleware/signupVerification.js');
const signupValidation = require('./middleware/signupValidation.js');
const loginValidation = require('./middleware/loginValidation.js');
const sigupIsFound = require('./middleware/signupIsFound.js');
const hashPassword = require('./middleware/hashPassword.js');
const addUser = require('./middleware/addUser.js');
const loginIsFound = require('./middleware/loginIsFound.js')
router.post('signup',signupVerification,sigupIsFound,hashPassword,addUser);
router.post('login',loginIsFound);