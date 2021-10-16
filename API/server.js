const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./post.route');

const uri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://JGY:TIC2021_59_6@cluster0.bajxc.mongodb.net/test?authSource=admin&replicaSet=atlas-mr5gzo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
.then(() => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/posts', postRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
