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
    this.mqttClient.subscribe('/ujangsprr@gmail.com/data1');
    this.mqttClient.subscribe('/ujangsprr@gmail.com/data2');
    this.mqttClient.subscribe('/ujangsprr@gmail.com/data3');
    this.mqttClient.subscribe('/ujangsprr@gmail.com/data4');
    this.mqttClient.subscribe('/ujangsprr@gmail.com/data5');
    this.mqttClient.subscribe('/ujangsprr@gmail.com/data6');

    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic, message, packet) {
      // console.log(message.toString());
      if(topic === '/ujangsprr@gmail.com/data1'){
        eventEmitter.emit('Message Data 1', message.toString())
        // console.log(message.toString());
      }
      if(topic === '/ujangsprr@gmail.com/data2'){
        eventEmitter.emit('Message Data 2', message.toString())
      }
      if(topic === '/ujangsprr@gmail.com/data3'){
        eventEmitter.emit('Message Data 3', message.toString())
      }
      if(topic === '/ujangsprr@gmail.com/data4'){
        eventEmitter.emit('Message Data 4', message.toString())
      }
      if(topic === '/ujangsprr@gmail.com/data5'){
        eventEmitter.emit('Message Data 5', message.toString())
      }
      if(topic === '/ujangsprr@gmail.com/data6'){
        eventEmitter.emit('Message Data 6', message.toString())
      }
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
