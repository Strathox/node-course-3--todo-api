const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

process.env.MONGOLAB_URI = 'mongodb://benchude:TangentGPE2001@ds215089.mlab.com:15089/node-todo-api'

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp2');

module.exports = {mongoose};
