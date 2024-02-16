const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: String,
    username: String,
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

PostSchema.statics.getPost = async (id) => {
    try {
        const result = await Post.findById(id);
        return result;
    } catch (err) {
        throw new Error("Error getting posts");
    }
}

PostSchema.statics.getPosts = async () => {
    try {
        const result = await Post.find();
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
        await this.update(post)
    } catch (err) {
        throw new Error(err)
    }
}


PostSchema.methods.addComment = async function (comment) {
    try {
        this.comments.push(comment)
        await this.save()
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
