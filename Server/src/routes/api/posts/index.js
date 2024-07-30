const express = require('express');
const getPost = require('./getPost');
const updatePost = require('./updatePost');
const allPosts = require('./allPosts')
const createPost = require('./createPost')
const deletePost = require('./deletePost');
const filteredPosts = require('./filteredPosts');
const getUserPosts = require('./getUserPosts');
const addComment = require('./addComment');


// Create a router on which to mount our API endpoints
const router = express.Router();

// get all Posts
router.get('/all', allPosts)

router.get('/filter', filteredPosts)

router.get('/:postId', getPost)

router.get('/user/:username', getUserPosts)

router.post('/create', createPost)


router.post('/:postId/comment', createPost)


router.put('/:postId/update', updatePost)


router.delete('/:postId/delete', deletePost)

router.put('/:postId/addComment', addComment)

// Export our routes
module.exports = router
