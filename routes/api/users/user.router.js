const router = require('express').Router();
const auth = require('../../auth');
const userController = require('./user.controller')

router.post('/', userController.newUser); 

router.post('/login', userController.login)

module.exports = router;