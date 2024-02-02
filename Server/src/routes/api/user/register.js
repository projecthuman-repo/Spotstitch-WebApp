const { User } = require('../../../model');
const { CrossPlatformUser } = require('../../../model');

module.exports = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      picture: req.body.picture,
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

    res.status(201).json(user);
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
