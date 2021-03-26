const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
