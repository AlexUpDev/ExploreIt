const constants = require("../constants/constants");

const navigationManager = require("../navigationManager");

const languageEng = constants.variables.LANGUAGE_ENG;
const languageRus = constants.variables.LANGUAGE_RUS;

const pageMews = constants.variables.PAGE_NEWS;

let pageInfo = { currentPage : '', language : '', getLink : navigationManager.getLink };

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