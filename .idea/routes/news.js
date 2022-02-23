const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const news = require('../controllers/news');

const { isLoggedIn } = require('../middleware');

router.get('/news', news.renderNewsList);

module.exports = router;