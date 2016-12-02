'use strict';

const http = require('http');
const path = require('path');

const express = require('express');
const socketIO = require('socket.io');

const main = require('./main.js');

const app = express();
const serv = http.createServer(app);
const io = socketIO.listen(serv);

app.use('/', express.static(path.join(__dirname, '/../client')));

serv.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    main(io);
});
