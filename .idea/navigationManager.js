const constants = require('./constants/constants.js');

const languageEng = constants.variables.LANGUAGE_ENG;
const languageRus = constants.variables.LANGUAGE_RUS;

const pageMain = constants.variables.PAGE_MAIN;
const pageNews = constants.variables.PAGE_NEWS;
const pageEng = constants.variables.PAGE_ENG;
const pageRus = constants.variables.PAGE_RUS;
const pageRegister = constants.variables.PAGE_REGISTER;
const pageUserinfo = constants.variables.PAGE_USERINFO;
const pageAllUsers = constants.variables.PAGE_ALLUSERS;
const pageSetupOverview = constants.variables.PAGE_SETUP_OVERVIEW;
const pageLogin = constants.variables.PAGE_LOGIN;
const pageLogout = constants.variables.PAGE_LOGOUT;

const eng_dir = '/eng';
const rus_dir = '/rus';

const admin_dir = '/admin';
const login_dir = '/login';
const logout_dir = '/logout';
const news_dir = '/news';
const register_dir = '/register';

module.exports.getLink = (pageInfo, newPage) => {

    let link = '';

    if (newPage === pageEng) {
        link += eng_dir;
    } else if (newPage === pageRus) {
        link += rus_dir;
    } else {
        if (pageInfo.language === languageEng) {
            link += eng_dir;
        } else if (pageInfo.language === languageRus) {
            link += rus_dir;
        }
    }


    if (newPage === pageMain) {
        return link;

    } else if (newPage === pageNews) {
        return link += news_dir;

    } else if (newPage === pageEng || newPage === pageRus) {
        if (pageInfo.currentPage === pageLogin) {
            return link += login_dir;
        } else if (pageInfo.currentPage === pageRegister) {
            return link += register_dir;
        } else if (pageInfo.currentPage === pageSetupOverview) {
            return link += admin_dir;;
        } else {
            return link;
        }

    } else if (newPage === pageLogin) {
        return link += login_dir;

    } else if (newPage === pageRegister) {
        return link += register_dir;

    } else if (newPage === pageSetupOverview) {
        return link += admin_dir;

    } else if (newPage === pageLogout) {
        return link += logout_dir;
    }
}


