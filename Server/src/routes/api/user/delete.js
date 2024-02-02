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
    await user.delete();

    const crossPlatformUser = await CrossPlatformUser.findOne({
      spotstitchUserId: user._id,
    });
    crossPlatformUser.spotstitchUserId = '';
    await crossPlatformUser.save();

    res.status(204).send(); // No content to send back
  } catch (e) {
    res
      .status(e.message === 'User not found' ? 404 : 400)
      .json({ message: e.message });
  }
};
