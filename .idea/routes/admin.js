const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const admin = require('../controllers/admin');

const { isLoggedIn } = require('../middleware');

router.get('/admin', admin.renderOverview);

module.exports = router;