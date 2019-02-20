const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.sockets.on('connection', socket => {
    const clientIP = socket.request.connection.remoteAddress;
    console.log('New connection from ' + clientIP);

    io.sockets.emit('message', {type: 'CONNECT', ip: clientIP});

    socket.on('message', msg => {
        console.log('Have new message: ', msg);

        io.sockets.emit('message', {...msg, ip: clientIP})
    });

    socket.on('disconnect', () => {
        console.log('New disconnect from ' + clientIP);

        io.sockets.emit('message', {type: 'DISCONNECT', ip: clientIP});
    });
});

module.exports = server;
