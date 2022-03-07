const constants = require("../constants/constants");

module.exports.renderNewsList = (req, res) => {
    res.render('news/newslist', { constants });
}