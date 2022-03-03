const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String
    },
    state: {
        type: String
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

UserSchema.virtual('properties.popUpMarkup').get(function () {
    return `
    <strong><a href="/admin/${this._id}">${this.Name}</a><strong>
    <p>${this.description.substring(0, 20)}...</p>`
});