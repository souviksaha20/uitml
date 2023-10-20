// import ReconnectingWebSocket from "./ReconnectingWebSocket";

// var ws = new ReconnectingWebSocket('ws://localhost:8083/status');
// ws.onopen = () => {
//     // Connection opened
//     console.log('WebSocket connection opened'); 
//     // Send a message to the server
//   };
//   ws.onmessage = (e) => {
//     // Receive a message from the server
//     console.log(e.data);
//   };
//   ws.onerror = (e) => {
//     // An error occurred
//     console.log(e.message);
//   };
//   ws.onclose = (e) => {
//     // Connection closed
//     console.log(e.code, e.reason);
//   };
//   var heartCheck = {
//     timeout: 10000,//default 10s
//     timeoutObj: null,
//     serverTimeoutObj: null,
//     reset:function(){
//         clearTimeout(this.timeoutObj);
//         clearTimeout(this.serverTimeoutObj);
//         return this;
//     },
//     start:function(){
//         let self = this;
//         this.timeoutObj = setTimeout(function(){
//             ws.send("heartbeat string");
//             self.serverTimeoutObj = setTimeout(function(){
//                 ws.close();
//                 ws.reconnect();
//             }, self.timeout)
//         }, this.timeout)
//     }
// }
