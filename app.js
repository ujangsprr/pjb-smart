var express = require("express");
const http = require('http');
var app = express();
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
var bodyParser = require("body-parser");
var mqttHandler = require('./mqtt_handler');
var eventEmitter = require('./eventEmiter')
var mqttClient = new mqttHandler();

app.use(express.static('client'));

mqttClient.connect();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/client/index.html")
})

// Run when client connects
io.on('connection', socket => {
    console.log('New WS Connection...');

    eventEmitter.on('Message Data 1', msg => {
        socket.emit('message 1', msg);
    })
    eventEmitter.on('Message Data 2', msg => {
        socket.emit('message 2', msg);
    })
    eventEmitter.on('Message Data 3', msg => {
        socket.emit('message 3', msg);
    })
    eventEmitter.on('Message Data 4', msg => {
        socket.emit('message 4', msg);
    })
    eventEmitter.on('Message Data 5', msg => {
        socket.emit('message 5', msg);
    })
    eventEmitter.on('Message Data 6', msg => {
        socket.emit('message 6', msg);
    })
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));