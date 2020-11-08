const express = require('express');
const app = express();
const useSocket = require('socket.io');

const server = require('http').Server(app);
const io = useSocket(server);

app.get('/hello', (req, res, next) => {
    console.log('1111111111');
    next();
}, (req, res) => {
    console.log('2222222222222')
    res.send('Hello');
});

app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

io.on('connection', (socket) => {
    console.log('user connected', socket);
});


app.listen(4000, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server started')
})

