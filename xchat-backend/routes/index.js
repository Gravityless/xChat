/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Xu Song
 * @Date: 2023-11-10 21:06:53
 * @LastEditors: Xu Song
 * @LastEditTime: 2023-11-10 22:13:02
 */
const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');

router.get('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;
