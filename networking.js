let socket = new WebSocket("ws://54.147.44.11:42742");

function alert(msg){
  console.log(msg);
}

socket.onopen = function(e) {
  alert("[open] Connection established");
  // alert("Sending to server");
  // socket.send("Designer_Message");
};

socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};


function sendMessage(){
  socket.send("Designer_Message");
  alert("Send designer message");
}