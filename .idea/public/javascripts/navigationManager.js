const constants = require('../constants/constants.js');

const languageEng = constants.variables.LANGUAGE_ENG;
const languageRus = constants.variables.LANGUAGE_RUS;

const pageLogin = constants.variables.PAGE_LOGIN;
const pageRegister = constants.variables.PAGE_REGISTER;
const pageUserinfo = constants.variables.PAGE_USERINFO;
const pageAllUsers = constants.variables.PAGE_ALLUSERS;
const pageSetupOverview = constants.variables.PAGE_SETUP_OVERVIEW;

module.exports.getLink = (pageName, language) => {
    console.log('get Link plugged in!');
    console.log('Page Name: ' + pageName);
    console.log('Language: ' + language);
    return '/ru';
}


