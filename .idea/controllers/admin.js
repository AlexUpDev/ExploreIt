
const User = require('../models/user');

const constants = require('../constants/constants.js');

const languageEng = constants.variables.LANGUAGE_ENG;
const languageRus = constants.variables.LANGUAGE_RUS;

const pageSetupOverview = constants.variables.PAGE_SETUP_OVERVIEW;

let pageInfo = { currentPage : '', language : '' };

module.exports.renderOverviewEng = async (req, res) => {
    pageInfo.language = languageEng;
    pageInfo.currentPage = pageSetupOverview;
    const users = await User.find({}).populate('popupText');
    res.render('admin/overview', { constants, users, pageInfo });
}

module.exports.renderOverviewRus = async (req, res) => {
    pageInfo.language = languageRus;
    pageInfo.currentPage = pageSetupOverview;
    const users = await User.find({}).populate('popupText');
    res.render('admin/overview', { constants, users, pageInfo });
}