const User = require('../models/user');

const constants = require('../constants/constants.js');

const navigationManager = require('../navigationManager.js');
let pageInfo = navigationManager.pageInfo;

const languageEng = constants.variables.LANGUAGE_ENG;
const languageRus = constants.variables.LANGUAGE_RUS;

const pageLogin = constants.variables.PAGE_LOGIN;
const pageRegister = constants.variables.PAGE_REGISTER;
const pageUserinfo = constants.variables.PAGE_USERINFO;
const pageAllUsers = constants.variables.PAGE_ALLUSERS;

module.exports.renderLoginEng = (req, res) => {
    pageInfo.language = languageEng;
    pageInfo.currentPage = pageLogin;
    res.render('users/login', { constants, pageInfo });
}

module.exports.renderLoginRus = (req, res) => {
    pageInfo.language = languageRus;
    pageInfo.currentPage = pageLogin;
    res.render('users/login', { constants, pageInfo });
}

module.exports.loginEng = (req, res) => {
    req.flash('success', 'С возвращением!');
    const redirectUrl = req.session.returnTo || '/eng';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.loginRus = (req, res) => {
    req.flash('success', 'С возвращением!');
    const redirectUrl = req.session.returnTo || '/rus';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.renderRegisterEng = (req, res) => {
    pageInfo.language = languageEng;
    pageInfo.currentPage = pageRegister;
    res.render('users/register', { constants, pageInfo });
}

module.exports.renderRegisterRus = (req, res) => {
    pageInfo.language = languageRus;
    pageInfo.currentPage = pageRegister;
    res.render('users/register', { constants, pageInfo });
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username, type: 'user', state: 'active'});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Добро пожаловать!');
            res.redirect('/');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderShowAllEng = async (req, res) => {
    pageInfo.language = languageEng;
    pageInfo.currentPage = pageAllUsers;
    const users = await User.find({}).populate('popupText');
    res.render('users/showAll', { constants, pageInfo, users });
}

module.exports.renderShowAllRus = async (req, res) => {
    pageInfo.language = languageRus;
    pageInfo.currentPage = pageAllUsers;
    const users = await User.find({}).populate('popupText');
    res.render('users/showAll', { constants, pageInfo, users });
}

module.exports.renderUserInfoEng = (req, res) => {
    pageInfo.language = languageEng;
    pageInfo.currentPage = pageUserinfo;
    res.render('users/info', { constants, pageInfo });
}

module.exports.renderUserInfoRus = (req, res) => {
    pageInfo.language = languageEng;
    pageInfo.currentPage = pageUserinfo;
    res.render('users/info', { constants, pageInfo });
}

module.exports.showEdit = async (req, res) => {

    const user = await User.findById(req.params.id);
    if (!user) {
        req.flash('error', 'Cannot find User!');
        return res.redirect('/users');
    }
    res.render('users/edit', { constants, user });
}
/*
module.exports.updateUser = async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    const user = await User.findByIdAndUpdate(id, { ...req.body.user });
    await user.save();
    req.flash('success', 'Successfully updated campground!');
    res.redirect(`/users/${user._id}`)
}

module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground')
    res.redirect('/admin');
}
*/

module.exports.logoutEng = (req, res) => {
    req.logout();
    // req.session.destroy();
    req.flash('success', 'Ждем снова');
    res.redirect('/eng/');
}

module.exports.logoutRus = (req, res) => {
    req.logout();
    // req.session.destroy();
    req.flash('success', 'Ждем снова');
    res.redirect('/rus/');
}