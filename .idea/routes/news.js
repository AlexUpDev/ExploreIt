const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const news = require('../controllers/news');

const { isLoggedIn } = require('../middleware');

router.get('/eng/news', news.renderNewsListEng);
router.get('/rus/news', news.renderNewsListRus);

module.exports = router;