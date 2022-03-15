const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

const { isActive, isLoggedIn, validateUser } = require('../middleware');

router.route('/eng/login')
    .get(users.renderLoginEng)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/eng/login' }), users.loginEng)

router.route('/rus/login')
    .get(users.renderLoginRus)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/rus/login' }), users.loginRus)

router.route('/eng/register')
    .get(users.renderRegisterEng)
    .post(catchAsync(users.register));

router.route('/rus/register')
    .get(users.renderRegisterRus)
    .post(catchAsync(users.register));

router.get('/eng/info', isLoggedIn, users.renderUserInfoEng)

router.get('/rus/info', isLoggedIn, users.renderUserInfoRus)

router.get('/eng/users', isLoggedIn, users.renderShowAllEng)

router.get('/rus/users', isLoggedIn, users.renderShowAllRus)

router.route('/eng/users/:id')
    .get(catchAsync(users.showEditEng))
    //.put(isLoggedIn, validateUser, catchAsync(users.updateUser))
    .delete(isLoggedIn, catchAsync(users.deleteUserEng));

router.route('/rus/users/:id')
    .get(catchAsync(users.showEditRus))
    //.put(isLoggedIn, validateUser, catchAsync(users.updateUser))
    .delete(isLoggedIn, catchAsync(users.deleteUserRus));

router.get('/eng/logout', users.logoutEng);
router.get('/rus/logout', users.logoutRus);

module.exports = router;