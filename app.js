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

    eventEmitter.on('Message Data', msg => {
        socket.emit('message', msg);
    })
});



// Routes
// app.post("/send-mqtt", function(req, res) {
//   mqttClient.sendMessage(req.body.message);
//   res.status(200).send("Message sent to mqtt");
// });


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));