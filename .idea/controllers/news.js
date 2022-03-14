const constants = require("../constants/constants");

const pageManager = require('../pageManager.js');
let pageInfo = pageManager.pageInfo;

const languageEng = constants.variables.LANGUAGE_ENG;
const languageRus = constants.variables.LANGUAGE_RUS;

const pageMews = constants.variables.PAGE_NEWS;

module.exports.renderNewsListEng = (req, res) => {
    pageInfo.language = languageEng;
    pageInfo.currentPage = pageMews;
    res.render('news/newslist', { constants, pageInfo });
}

module.exports.renderNewsListRus = (req, res) => {
    pageInfo.language = languageRus;
    pageInfo.currentPage = pageMews;
    res.render('news/newslist', { constants, pageInfo });
}