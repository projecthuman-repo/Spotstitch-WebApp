const { CrossPlatformUser } = require('../../../model');
const { createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
      const { email } = req.params.email;
      await CrossPlatformUser.findByCredentials(email);
      res.status(200).json({ message: 'User found' });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  };