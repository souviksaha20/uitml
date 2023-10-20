import ReconnectingWebSocket from "./ReconnectingWebSocket";

var ws = new ReconnectingWebSocket('ws://localhost:8082/status');
ws.onopen = () => {
    // Connection opened
    console.log('WebSocket connection opened'); 
    // Send a message to the server
  };
  ws.onmessage = (e) => {
    // Receive a message from the server
    console.log(e.data);
  };
  ws.onerror = (e) => {
    // An error occurred
    console.log(e.message);
  };
  ws.onclose = (e) => {
    // Connection closed
    console.log(e.code, e.reason);
  };
