const mongoose = require('mongoose');

// Connection options (optional)
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGODB_URL =
  process.NODE_ENV === 'production'
    ? process.env.MONGO_URI
    : process.env.LOCAL_URI;

const CROSSPLATFORM_URL =
  process.NODE_ENV === 'production'
    ? process.env.DATABASE_CROSS_PLATFORM_CONNECTION
    : process.env.LOCAL_URI;


console.log('MONGODB_URL', MONGODB_URL);

const connectToSpotstitchDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL, dbOptions);
    console.log('Connected to the default database');
  } catch (error) {
    throw new Error(`Connecting to the default database: ${error}`);
  }
};

// Create a connection to the CrossPlatform database
const crossPlatformDatabase = mongoose.createConnection(
  CROSSPLATFORM_URL,
  dbOptions
);

const connectToCrossPlatformDatabase = async () => {
  try {
    await crossPlatformDatabase.asPromise();
    console.log('Connected to the CrossPlatform database');
  } catch (error) {
    throw new Error(`Connecting to the CrossPlatform database: ${error}`);
  }
};

// Connect to all databases
const connectToDatabases = async () => {
  try {
    await connectToSpotstitchDatabase();
    await connectToCrossPlatformDatabase();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connectToDatabases,
  crossPlatformDatabase,
};
