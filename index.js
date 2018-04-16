const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
server.listen(3001);

const users = [];
const connections = [];

const PageRouter = require('./routes/PageRouter');

io.sockets.on('connection',(socket) => {
    connections.push(socket);
    console.log(' %s sockets is connected', connections.length);
 
    socket.on('disconnect', () => {
       connections.splice(connections.indexOf(socket), 1);
    });
 
    socket.on('sending message', (message) => {
       console.log('Message is received :', message);
       io.sockets.emit('new message', {message: message});
    });
});

app.use(express.static('assets'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', PageRouter);
