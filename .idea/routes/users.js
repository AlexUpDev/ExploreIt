const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

const { isActive, isLoggedIn, validateUser } = require('../middleware');

router.route('/eng/login')
    .get(users.renderLoginEng)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: 'eng/login' }), users.login)

router.route('/rus/login')
    .get(users.renderLoginRus)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: 'rus/login' }), users.login)

router.route('/eng/register')
    .get(users.renderRegisterEng)
    .post(catchAsync(users.register));

router.route('/rus/register')
    .get(users.renderRegisterRus)
    .post(catchAsync(users.register));

router.get('/info', isLoggedIn, users.renderUserInfo)

router.get('/users', isLoggedIn, users.renderShowAll)

router.route('/users/:id')
    .get(catchAsync(users.showEdit))
    //.put(isLoggedIn, validateUser, catchAsync(users.updateUser))
    //.delete(isLoggedIn, catchAsync(users.deleteUser));

router.get('/logout', users.logout)

module.exports = router;