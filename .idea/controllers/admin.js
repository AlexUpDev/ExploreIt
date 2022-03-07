
const User = require('../models/user');

const constants = require('../constants/constants.js');

module.exports.renderOverview = async (req, res) => {
    const users = await User.find({}).populate('popupText');
    res.render('admin/overview', { constants, users });
}
