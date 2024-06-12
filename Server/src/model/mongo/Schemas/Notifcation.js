const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
  userId: { type: String, required: true },
  courseId: String,
  type: { type: String, required: true }, // 'email', 'sms', 'push'
  payload: { type: Object, required: true },
  status: { type: String, default: 'pending' }, // 'pending', 'delivered', 'failed'
  retryCount: { type: Number, default: 0 },
  maxRetryAttempts: { type: Number, default: 3 },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;