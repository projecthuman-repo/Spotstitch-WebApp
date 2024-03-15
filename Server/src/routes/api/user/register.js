const { User } = require('../../../model');
const { CrossPlatformUser } = require('../../../model');
const { createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      picture: req.body.picture,
      userType: req.body.userType
    });
    await User.create(user);

    // CrossPlatformUser manages the 3 web app users (lotuslearning, regenquest, spotstitch)
    // If the CrossPlatformUser has not been created with other platform, create a new one
    const crossPlatformUserExists = await CrossPlatformUser.findOne({
      $or: [{ email: user.email }, { phoneNumber: user.phoneNumber }],
    });

    if (crossPlatformUserExists) {
      crossPlatformUserExists.spotstitchUserId = user._id;
      await crossPlatformUserExists.save();
    } else {
      const newCrossPlatformUser = new CrossPlatformUser({
        email: user.email,
        phoneNumber: user.phoneNumber,
        spotstitchUserId: user._id,
      });
      await newCrossPlatformUser.save();
    }
    const success = createSuccessResponse({ user: user })
    res.status(201).json(success);
  } catch (e) {
    let msg;
    if (e.code == 11000) {
      msg = 'User already exists';
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg);
  }
};
