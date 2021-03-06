const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://ahoycap:654asd321@cluster0-wimfi.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(process.env.PORT || 3333);