module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'Пожалуйста, выполните вход!');
        return res.redirect('/login');
    }
    next();
}