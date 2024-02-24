require('dotenv').config();

import { connect } from 'mongoose';

connect('mongodb://127.0.0.1:27017/dynamic-chat-app');

const app = require('express')();

const http = require('http').Server(app);

import userRoute from './routes/userRoute';
app.use('/',userRoute);

http.listen(3000, function() {

    console.log('server is running');

});