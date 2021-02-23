const mqtt = require('mqtt');
var eventEmitter = require('./eventEmiter')

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://mqtt.dioty.co:1883';
    this.username = 'ujangsprr@gmail.com'; // mqtt credentials if these are needed to connect
    this.password = 'a1e2b36d';
  }
  
  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe('/ujangsprr@gmail.com/mytopic', {qos: 0});

    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic, message) {
      // console.log(message.toString());
      eventEmitter.emit('Message Data', message.toString())
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish('/ujangsprr@gmail.com/mytopic', message);
  }
}

module.exports = MqttHandler;
