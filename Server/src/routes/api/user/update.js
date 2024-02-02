const { User } = require('../../../model');
const { CrossPlatformUser } = require('../../../model');

module.exports = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new Error('User not found');
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      throw new Error('Permission denied');
    }
    const { name, email, phoneNumber } = req.body;

    // Check the existing data. email and phone number defined as unique in the schema
    if (user.email !== email) {
      const emailExists = await User.findOne({ email: email });
      if (emailExists !== null)
        throw new Error('The given email already used by another user');
    }

    if (user.phoneNumber !== phoneNumber) {
      const phoneNumberExists = await User.findOne({
        phoneNumber,
      });
      if (phoneNumberExists !== null)
        throw new Error('The given phone number already used by another user');
    }

    user.name = name;
    user.email = email;
    user.phoneNumber = phoneNumber;
    await user.save();

    // CrossPlatformUser manages the 3 web app users (lotuslearning, regenquest, spotstitch)
    const crossPlatformUser = await CrossPlatformUser.findOne({
      spotstitchUserId: user._id,
    });
    crossPlatformUser.email = user.email;
    crossPlatformUser.phoneNumber = user.phoneNumber;
    await crossPlatformUser.save();

    res.status(200).json(user);
  } catch (e) {
    res
      .status(e.message === 'User not found' ? 404 : 400)
      .json({ message: e.message });
  }
};
