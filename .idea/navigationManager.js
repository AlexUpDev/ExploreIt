const constants = require('./constants/constants.js');

const languageEng = constants.variables.LANGUAGE_ENG;
const languageRus = constants.variables.LANGUAGE_RUS;

const pageLogin = constants.variables.PAGE_LOGIN;
const pageMain = constants.variables.PAGE_MAIN;
const pageNews = constants.variables.PAGE_NEWS;
const pageRegister = constants.variables.PAGE_REGISTER;
const pageUserinfo = constants.variables.PAGE_USERINFO;
const pageAllUsers = constants.variables.PAGE_ALLUSERS;
const pageSetupOverview = constants.variables.PAGE_SETUP_OVERVIEW;

module.exports.getLink = (pageInfo, newPage) => {
    console.log(' NM get Link plugged in!');
    console.log('Current page: ' + pageInfo.currentPage);
    console.log('New page: ' + newPage);
    console.log('Language: ' + pageInfo.language);

    if (newPage === pageMain) {
        if (pageInfo.language === languageEng) {
            return '/eng';
        } else if (pageInfo.language === languageRus) {
            return '/rus';
        }
    } else if (newPage === pageNews) {
        if (pageInfo.language === languageEng) {
            return "/eng/news";
        } else if (pageInfo.language === languageRus) {
            return "/rus/news";
        }
    }


}


