
const User = require('../models/user');

module.exports.renderOverview = async (req, res) => {
    const users = await User.find({}).populate('popupText');
    res.render('admin/overview', { users });
}
