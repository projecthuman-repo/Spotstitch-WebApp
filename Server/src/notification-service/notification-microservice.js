const { connectToQueue, publishMessage } = require('./message-queue-service');
const Notification = require('../models/Notification');

// Connect to the message queue before handling notification triggers
connectToQueue();

// Function to handle incoming notification triggers
const handleNotificationTrigger = async (receivedData) => {
  // status 'pending': the notification has been created but not yet delivered.
  const notification = new Notification({
    ...receivedData,
    status: 'pending',
  });

  try {
    await notification.save();
    await publishMessage(notification); // Publish notification to the message queue
  } catch (error) {
    console.error('Error handling notification trigger:', error);
  }
};

module.exports = { handleNotificationTrigger };