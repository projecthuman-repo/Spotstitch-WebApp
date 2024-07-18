const mongoose = require('mongoose');
const { updateFields } = require('./validateFields');

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    username: String,
    userDescription: String,
    image: {
        data: String,
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

PostSchema.statics.getAllPosts = async () => {
    try {
        const result = await Post.find();
        return result;
    } catch (err) {
        throw new Error("Error getting all posts");
    }
}

PostSchema.statics.getPost = async (id) => {
    try {
        const result = await Post.findById(id);
        return result;
    } catch (err) {
        throw new Error("Error getting posts");
    }
}

PostSchema.statics.getPosts = async (filters = "") => {
    try {
        const result = await Post.find({ tags: { $all: filters } });
        return result;
    } catch (err) {
        throw new Error("Error getting posts");
    }
}

PostSchema.statics.createPost = async (postData) => {
    try {
        const post = new Post(postData)
        await post.save()
        return post;
    } catch (err) {
        throw new Error("Error getting posts");
    }
}

PostSchema.methods.updateImage = async function (newImg) {
    try {
        this.image = newImg
        await this.save()
    } catch (err) {
        throw new Error(err)
    }
}

PostSchema.methods.updatePost = async function (post) {
    try {
        updateFields(this, post)
        await this.save()
    } catch (err) {
        throw new Error(err)
    }
}


PostSchema.methods.addComment = async function (userId, comment) {
    try {
        const post = {
            by: userId,
            content: comment,
            likes: 0
        }
        this.comments.push(post)
        await this.save()
        return this
    } catch (err) {
        throw new Error(err)
    }
}

PostSchema.methods.deletePost = async function () {
    try {
        await this.delete()
    } catch (err) {
        throw new Error(err)
    }
}


const Post = mongoose.model('Post', PostSchema);

module.exports = Post
