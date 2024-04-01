const { CrossPlatformUser } = require('../../../model');
const { createSuccessResponse } = require('../../../response');

module.exports = async (req, res, next) => {
  try {
    const users = await CrossPlatformUser.find({});
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};