const amqp = require('amqplib');

const queueName = 'notificationsQueue'; // It will be used in RabbitMQ for storing messages
const connectionString = process.env.RABBITMQ_URL || 'amqp://localhost';

// Connect to the message queue and create a channel
async function connectToQueue() {
  try {
    const connection = await amqp.connect(connectionString);

    // Creates a communication channel over the established connection.
    const channel = await connection.createChannel();

    //Ensures that the queue exists. If it doesn't, RabbitMQ will create it.
    await channel.assertQueue(queueName, { durable: false });
    console.log(
      `Connected to RabbitMQ ${connectionString} and queue asserted ${queueName}`
    );

    return channel;
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
    process.exit(1);
  }
}

// Function to subscribe to the queue
async function subscribeToQueue(callback) {
  // Listen for new messages.
  const channel = await connectToQueue();
  channel.consume(queueName, (message) => {
    // consume method is used to read messages from the queue.
    // When a message is received, the callback function is triggered.
    if (message !== null) {
      console.log(
        'Received a message from the queue:',
        message.content.toString()
      );

      // The message content is parsed from a Buffer to a string and then to a JSON object, which is then passed to the callback function
      const notification = JSON.parse(message.content.toString());
      callback(notification);

      // Acknowledges the message, indicating to RabbitMQ that it has been processed and can be removed from the queue.
      channel.ack(message);
    }
  });
}

// Function to publish a message to the queue
async function publishMessage(message) {
  const channel = await connectToQueue();

  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
  console.log('Published a message to the queue:', message);
}

module.exports = { connectToQueue, subscribeToQueue, publishMessage };