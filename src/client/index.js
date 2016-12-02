'use strict';

const socketIO = require('socket.io-client');

const main = require('./main');

const io = socketIO();

main(io);
