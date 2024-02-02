const { User } = require('../../../model');
const { CrossPlatformUser } = require('../../../model');

module.exports = async (req, res) => {
  try {
    // TODO: check if the user is authorized

    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error('User not found');
    }

    const crossPlatformUser = await CrossPlatformUser.findOne({
      spotstitchUserId: id,
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
