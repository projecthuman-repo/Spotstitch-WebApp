const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure this path is correct
const Email = require('../email'); // Ensure this path is correct

// POST /api/send-verification-email
router.post('/send-verification-email', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const verificationUrl = `http://localhost:3000/emailverification?token=${user.verificationToken}`; // Use your local domain
    const emailSender = new Email(user, verificationUrl);
    await emailSender.sendWelcomeToApp();

    res.status(200).json({ message: 'Verification email sent successfully' });
  } catch (error) {
    console.error('Error sending verification email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
