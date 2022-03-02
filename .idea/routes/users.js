const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

const { isLoggedIn, validateUser } = require('../middleware');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/info', isLoggedIn, users.renderUserInfo)

router.route('/users/:id')
    .get(catchAsync(users.showEdit))
    //.put(isLoggedIn, validateUser, catchAsync(users.updateUser))
    //.delete(isLoggedIn, catchAsync(users.deleteUser));

router.get('/logout', users.logout)

module.exports = router;