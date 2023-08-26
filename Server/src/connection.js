const mongoose = require('mongoose');

if (process.env.MONGO_URI && process.NODE_ENV === 'production') {
   mongoose
      .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, })
      .then(() => console.log("Connected to MongoDB"))
      .catch(err => console.log(err));
} else if (process.env.LOCAL_URI && process.NODE_ENV !== 'production') {
   mongoose
      .connect(process.env.LOCAL_URI, { useNewUrlParser: true, useUnifiedTopology: true, })
      .then(() => console.log("Connected to local database"))
      .catch(err => console.log(err));
} else {
   throw new Error('')
}

module.exports = mongoose