const User = require('../models/user');

const constants = require('../constants/constants.js');

const languageEng = constants.variables.LANGUAGE_ENG;
const languageRus = constants.variables.LANGUAGE_RUS;

module.exports.renderRegister = (req, res) => {
    res.render('users/register', { constants });
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

module.exports.renderLoginEng = (req, res) => {
    const language = languageEng;
    res.render('users/login', { constants, language });
}

module.exports.renderLoginRus = (req, res) => {
    const language = languageRus;
    res.render('users/login', { constants, language });
}

module.exports.login = (req, res) => {
    req.flash('success', 'С возвращением!');
    const redirectUrl = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.renderShowAll = async (req, res) => {
    const users = await User.find({}).populate('popupText');
    res.render('users/showAll', { constants, users });
}

module.exports.renderUserInfo = (req, res) => {
    res.render('users/info', { constants });
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

module.exports.logout = (req, res) => {
    req.logout();
    // req.session.destroy();
    req.flash('success', 'Ждем снова');
    res.redirect('/');
}