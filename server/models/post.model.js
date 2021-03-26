const mongoose = require("mongoose");

<<<<<<< HEAD
const PostSchema = new mongoose.Schema({}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
=======
const PostSchema = new mongoose.Schema(
        {
            title: {
                type: String ,
                
            },
            
            description: {
                type: String
            },

            category: {
                type: String,

            },
    
            imageUrl: {
                type: String,
            },

            videoURL: {
                type: String,
            },
        },
        {timestamps:true}
    );

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
>>>>>>> c195884ff4ceab6a8b75b2ccf5ea920be5667467
