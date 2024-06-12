const nodemailer = require('nodemailer'); // For sending emails
const twilio = require('twilio'); // For sending SMS notifications
const admin = require('firebase-admin'); // For sending push notifications
const config = require('../utils/config');

// Initialize Firebase Admin SDK with your project credentials
admin.initializeApp({
  credential: admin.credential.cert(
    require(config.FIREBASE_ADMIN_SECRET_KEY_PATH)
  ),
});


// Twilio Messaging Services: https://www.twilio.com/docs/messaging/services
const twilioClient = twilio(
  config.TWILIO_ACCOUNT_SID,
  config.TWILIO_AUTH_TOKEN
);


// Function to send SMS notifications using Twilio
async function sendSMS(notification) {
  const { userId, payload } = notification;
  // TODO: Retrieve a user's phone number from database using userId

  await twilioClient.messages.create({
    to: '+1234567890', // replace with your phone number to receive sms for testing
    from: config.TWILIO_PHONE_NUMBER,
    body: payload.body,
  });
}

// Function to send Push notifications using Firebase Cloud Messaging
async function sendPushNotification(notification) {
  const { userId, payload } = notification;
  // TODO: Pass userId to payloadToSend if frontend needs it

  const payloadToSend = {
    notification: {
      title: payload.title, // Notification title
      body: payload.body, // Notification body
    },
    // TODO: Receive FCM device token from frontend, and store it in the database if needed
    token: config.FCM_DEVICE_TOKEN, // Target device token
  };

  try {
    const response = await admin.messaging().send(payloadToSend);
    console.log('Successfully sent push notification:', response);
  } catch (error) {
    console.error('Error sending push notification:', error);
  }
}

module.exports = { sendSMS, sendPushNotification };