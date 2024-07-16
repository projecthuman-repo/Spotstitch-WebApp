const express = require('express');
const multer = require('multer');
const { Post, User, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

const upload = multer(); 

const createPostHandler = async (req, res) => {
  try {
    logger.info({ headers: req.headers });
    logger.info({ jwtData: res.locals.jwtData });

    const userId = res.locals.jwtData?.id;
    const username = res.locals.jwtData?.username;

    if (!userId || !username) {
      throw new Error('Invalid user ID or username');
    }

    logger.info({ userId });
    logger.info({ requestBody: req.body });

    // Initialize postData with required fields
    const { description } = req.body;
    const postData = {
      userId,
      username,
      comments: [],
      likes: 0,
      description, 
    };

    if (req.file) {
      postData.image = req.file.buffer; // Use buffer for simplicity
    }

    logger.info({ postData });
    console.log('Post.schema:', Post);

    console.log('Post.schema.obj:', Post.schema.obj)

    // Validate required fields against Post schema
    const missingFields = validateFields(Post.schema.obj, postData);
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    logger.info('Validation passed');

    // Create the post
    const post = await Post.createPost(postData);
    if (!post) {
      throw new Error('Could not create post');
    }

    logger.info({ createdPost: post });

    // Update user's posts array
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User does not exist");
    }
    user.posts.push(post._id);
    await user.save();

    logger.info('User posts updated');

    // Respond with success message and created post
    res.status(201).json(createSuccessResponse({ post }));
  } catch (error) {
    // Log and respond with error message
    logger.error({ error: error.message });
    res.status(400).json(createErrorResponse(400, "Error creating post"));
  }
};

module.exports = [upload.single('image'), createPostHandler]; // Use array to apply multer middleware and handler
