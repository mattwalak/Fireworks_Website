DEBUG = (location.hostname === "localhost" || location.hostname === "127.0.0.1");
host = "ws://54.147.44.11:42742";

if(DEBUG){
  console.log("In debug");
  host = "ws://localhost:42742";
}

let socket = new WebSocket(host);

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
  socket.send("designer:pants optional!");
  alert("Sending designer message");
}