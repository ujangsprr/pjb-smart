var form = document.querySelector('form');
var chatMessages = document.querySelector('.chat-messages');

var socket = io();

// Message from server
socket.on('message', (message) => {
    console.log(message);
    message = message.split(";")
    outputMessage(message);
  
    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Output message to DOM
function outputMessage(message) {
    var div = document.createElement('div');
    div.classList.add('message');
    var p = document.createElement('p');
    p.innerHTML = `<span>${message[0]}</span>`;
    div.appendChild(p);
    var para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message[1];
    div.appendChild(para);
    document.querySelector('.chat-messages').appendChild(div);
  }

// import { connect } from 'mqtt';

// var client = connect("mqtt://mqtt.dioty.co:1883", {
// username: 'ujangsprr@gmail.com',
// password: 'a1e2b36d'
// });

// function getTime(){
// 	var date = new Date();
// 	var detik = date.getSeconds();
// 	var menit = date.getMinutes();
// 	var jam = date.getHours();
// 	var hari = date.getDay();
// 	var tanggal = date.getDate();
// 	var bulan = date.getMonth()+1;
// 	var tahun = date.getFullYear();
	
// 	if(detik < 10){
// 		detik = "0" + detik
// 	}
// 	if(menit < 10){
// 		menit = "0" + menit
// 	}
// 	if(jam < 10){
// 		jam = "0" + jam
// 	}

// 	return tanggal + "-" + bulan + "-" + tahun + " (" + jam + ":" + menit + ":" + detik + ")";
// }

// client.on('connect', function() {
//     client.subscribe('/ujangsprr@gmail.com/mytopic', function() {
//         client.on('message', function(topic, message, packet) {
//             var timestamp = getTime();
//             var input = document.querySelector('#message');
//             input.value = timestamp + " " + topic + " : " + message;
//         });
// 	});
// });