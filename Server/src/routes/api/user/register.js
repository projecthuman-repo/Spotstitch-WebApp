const logger = require('../../../logger');
const { User } = require('../../../model');
const { CrossPlatformUser } = require('../../../model');
const { createSuccessResponse, createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
  try {
    const user = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      userType: req.body.userType
    };
    const newUser = await User.createUser(user)

    // CrossPlatformUser manages the 3 web app users (lotuslearning, regenquest, spotstitch)
    // If the CrossPlatformUser has not been created with other platform, create a new one
    const crossPlatformUserExists = await CrossPlatformUser.findOne({
      $or: [{ email: user.email }, { phoneNumber: user.phoneNumber }],
    });

    if (crossPlatformUserExists) {
      crossPlatformUserExists.spotstitchUserId = newUser._id;
      await crossPlatformUserExists.save();
    } else {
      const newCrossPlatformUser = new CrossPlatformUser({
        email: user.email,
        phoneNumber: user.phoneNumber,
        spotstitchUserId: user._id,
      });
      await newCrossPlatformUser.save();
    }
    res.status(201).json(createSuccessResponse({ user: newUser }));
  } catch (e) {
    let msg;
    if (e.code == 11000) {
      msg = 'User already exists';
    } else {
      msg = e.message;
    }
    logger.error({ message: msg }, 'Error registering user')
    res.status(400).json(createErrorResponse(400, 'Error registering user'));
  }
};
