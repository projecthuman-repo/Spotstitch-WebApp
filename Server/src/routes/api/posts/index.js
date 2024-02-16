const express = require('express');
const getPost = require('./getPost');
const updatePost = require('./updatePost');
const allPosts = require('./allPosts')
const createPost = require('./createPost')
const deletePost = require('./deletePost')


// Create a router on which to mount our API endpoints
const router = express.Router();

// get all Posts
router.get('/all', allPosts)


router.get('/:postId', getPost)


router.post('/create', createPost)


router.post('/:postId/comment', createPost)


router.put('/:postId/update', updatePost)


router.delete('/:postId/delete', deletePost)


// Export our routes
module.exports = router
