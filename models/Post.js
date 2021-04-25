var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var User = require('../models/Users.js');

var PostSchema = new Schema({
    user: {type: Schema.ObjectId, href:'User'},
    title: String,
    description: String,
    publicationdate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Post',PostSchema);