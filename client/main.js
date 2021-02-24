var socket = io();

function getTime(){
	var date = new Date();
	var detik = date.getSeconds();
	var menit = date.getMinutes();
	var jam = date.getHours();
	var hari = date.getDay();
	var tanggal = date.getDate();
	var bulan = date.getMonth()+1;
	var tahun = date.getFullYear();

	if(detik < 10){
		detik = "0" + detik
	}
	if(menit < 10){
		menit = "0" + menit
	}
	if(jam < 10){
		jam = "0" + jam
	}

	return tanggal + "-" + bulan + "-" + tahun + " (" + jam + ":" + menit + ":" + detik + ")";
}

// Message from server
socket.on('message 1', (message) => {
  console.log(message);
  message = message.split(";")
  // outputMessage(message);
  document.getElementById("time 1").innerHTML = getTime();
  document.getElementById("msg 1").innerHTML = message[0] + "<br>" + message[1] + "<br>" + message[2] + "<br>" + message[3]
});
socket.on('message 2', (message) => {
  console.log(message);
  message = message.split(";")
  document.getElementById("time 1").innerHTML = getTime();
  document.getElementById("msg 2").innerHTML = message[0] + "<br>" + message[1] + "<br>" + message[2] + "<br>" + message[3]
});
socket.on('message 3', (message) => {
  console.log(message);
  message = message.split(";")
  document.getElementById("time 2").innerHTML = getTime();
  document.getElementById("msg 3").innerHTML = message[0] + "<br>" + message[1] + "<br>" + message[2] + "<br>" + message[3]
});
socket.on('message 4', (message) => {
  console.log(message);
  message = message.split(";")
  document.getElementById("time 2").innerHTML = getTime();
  document.getElementById("msg 4").innerHTML = message[0] + "<br>" + message[1] + "<br>" + message[2] + "<br>" + message[3]
});
socket.on('message 5', (message) => {
  console.log(message);
  message = message.split(";")
  document.getElementById("time 3").innerHTML = getTime();
  document.getElementById("msg 5").innerHTML = message[0] + "<br>" + message[1] + "<br>" + message[2] + "<br>" + message[3]
});
socket.on('message 6', (message) => {
  console.log(message);
  message = message.split(";")
  document.getElementById("time 3").innerHTML = getTime();
  document.getElementById("msg 6").innerHTML = message[0] + "<br>" + message[1] + "<br>" + message[2] + "<br>" + message[3]
});