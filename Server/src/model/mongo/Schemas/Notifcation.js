const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

NotificationSchema.statics.getNotification = async function (id) {
  try {
    const notification = await this.findById(id);
    return notification;
  } catch (err) {
    throw new Error('Error getting notification');
  }
};

NotificationSchema.statics.createNotification = async function (userId, title, content, image, link) {
  try {
    const notification = await this.create({
      userId,
      title,
      content,
      image,
      link,
    });
    return notification;
  } catch (err) {
    throw new Error('Error creating new notification');
  }
};

NotificationSchema.methods.deleteNotification = async function () {
    try {
      const notification = await this.model.findById(this.id);
  
      if (!notification) {
        throw new Error('Notification not found');
      }
    
      await notification.delete();
    } catch (err) {
      throw new Error('Error deleting notification');
    }
  };
  

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;


/*  Schema Template 

{
  "userId": ObjectId("..."),
  "title": "Notification Title",
  "content": "Notification Content",
  "image": "image_url.jpg",
  "link": "https://example.com",
  "date": ISODate("2023-11-10T12:34:56.789Z"),
  "isRead": false,
  "isDeleted": false
}

*/