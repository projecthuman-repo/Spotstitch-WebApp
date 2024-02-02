const { User } = require('../../../model');
const { createToken } = require('../../../authorization/auth');

/**
 * POST Request, login user
 */

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();

    const token = createToken(user._id.toString(), user.email, '7d');

    res.status(200).json({ user, token });
  } catch (e) {
    res.status(400).json(e.message);
  }
};
