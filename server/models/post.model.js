const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({}, {timestamps:true});

const Post = mongoose.model('Admin', PostSchema);
module.exports = Post;