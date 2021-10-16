//const mongoose = require('mongoose');

// DB.js

module.exports = {
  //DB: 'mongodb://localhost:27017/mevncrud'
  DB: 'mongodb+srv://JGY:TIC2021_59_6@cluster0.bajxc.mongodb.net/test?authSource=admin&replicaSet=atlas-mr5gzo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
}

const uri = process.env.MONGODB_URI;
// Once nodemon installed run de server: nodemon server.js



// This is the one added

/*
const mongoAtlasUri =
'mongodb+srv://JGY:TIC2021_59_6@cluster0.bajxc.mongodb.net/test?authSource=admin&replicaSet=atlas-mr5gzo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

try {
  
    // Connect to the MongoDB cluster

mongoose.connect(
    mongoAtlasUri,
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log(" Mongoose está conectado")
);
} catch (e) {
  console.log("no se pudo conectar");
}*/
