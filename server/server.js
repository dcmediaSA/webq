const express = require('express');
const http = require('http');

const socketIo = require('socket.io');
const router = require('./router');

const port = process.env.PORT || 5001;
const app = express().use(router);
const server = http.createServer(app);

module.exports.io = socketIo(server, {
    cors: { origin: '*' },
});

require('./sockets');

server.listen(port, () =>
    console.log('\x1b[32m%s\x1b[0m', `☁️\xa0 SERVER IS RUNNING ON PORT: ${port}`),
);
