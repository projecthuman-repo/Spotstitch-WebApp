const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user, 
    userDescription, 
    image, 
    description, 
    tags: [], 
    comments: [], 
    likes
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post
