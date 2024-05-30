const { User } = require('../../../model');
const { createToken } = require('../../../authorization/auth');

/**
 * POST Request, login user
 */

module.exports = async (req, res) => {
  try {
    const { email, password, mainmail } = req.body;
    const user = await User.findByCredentials(email, password);

    user.status = 'online';

    console.log("User: ", user);
    // console.log("Main User: ", userByMainmail);

    // if (userByMainmail && !user.otherAccounts.includes(userByMainmail._id)) {
    //   user.otherAccounts.push(userByMainmail._id);
    // }
    

    const token = createToken(user._id.toString(), user.email, '7d');
    user.token = token;

    await user.save();
    console.log(user);

    res.status(200).json({ user, token });
  } catch (e) {
    res.status(400).json(e.message);
  }
};
