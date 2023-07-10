const mongoose = require('mongoose');
require('dotenv').config();

mongoose 
 .connect('mongodb+srv://spotstichMessage:iupHWqkHUf3kxiiG@cluster0.vi1vlrf.mongodb.net/ChatAppMern?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
           })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));