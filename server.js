const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = 5001;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
    console.log('User connected');

    socket.on('message', msg => {
        console.log('Color Changed to: ', msg);

        io.sockets.emit('message', msg)
    });

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
