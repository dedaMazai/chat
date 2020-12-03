const express = require('express');
const app = express();
const useSocket = require('socket.io');
const userController = require ('./controllers/user-controller');
const { userValidator, loginValidator } = require ('./services/validators');
const { verifyToken } = require ('./services/auth-servise');

app.use('/api/profile/*', verifyToken);

const server = require('http').Server(app);
const io = useSocket(server);

app.use(express.json());


app.post('/api/signup', userValidator, userController.create);
app.post('/api/login', loginValidator, userController.login);
app.post('/api/send',  userController.send);
app.post('/api/chose',  userController.chose);






const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

// io.on('connection', (socket) => {
//     console.log('user connected', socket);
// });


server.listen(4000, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server started')
})

