const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: String, 
    userDescription: String, 
    image: {
        data: Buffer,
        contentType: String
    }, 
    description: String, 
    tags: [String], 
    comments: [{
        by: String,
        content: String,
        likes: Number
    }], 
    likes: Number
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post
