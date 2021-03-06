const five = require('johnny-five');
const Tessel = require('tessel-io');
const tessel2 = require('tessel');
var WebSocket = require('ws');

const Gesture = require('./APDS9960')(five);
const G_THRESHOLD = 15
const G_SENSITIVITY = 0.5
const board = new five.Board({ io: new Tessel() });
const gesture = new Gesture({ pin: 'A2'});

function emitGesture (direction, ws) {
  console.log('Emitting ' + direction);
  ws.send(direction)
}

console.log(Tessel.network);

tessel2.network.wifi.connection(function(error, settings) {
  console.log("Connected to wifi")

  // sockets
  const HOST = "ws://172.20.10.2:4545" // needs to be the laptop ip address
  const ws = new WebSocket(HOST);

  // board.on('ready', () => {
    // http.listen(1235, function(){
    //   console.log('listening on *:3000');
    // });
      console.log('Board ready');
    // wss.on('connection', function(ws) {
      console.log('Connection established!');
      gesture.on('right', () => emitGesture('right', ws));
      gesture.on('left', () => emitGesture('left', ws));
      gesture.on('up', () => emitGesture('up', ws));
      gesture.on('down', () => emitGesture('down', ws));
      gesture.on('vertical', () => emitGesture('vertical', ws));
      gesture.on('horizontal', () => emitGesture('horizontal', ws));
  // });
});

// var ws = require("nodejs-websocket")
// var port = 8000;
//
// // Create the websocket server, provide connection callback
// var server = ws.createServer(function (conn) {
//   console.log("New connection");
//
//   // If we get text from the client, and echo it
//   conn.on("text", function (str) {
//     // print it out
//     console.log("Received "+str)
//     // Send it back (but more excited)
//     conn.sendText(str.toUpperCase()+"!!!")
//   });
//
//   // When the client closes the connection, notify us
//   conn.on("close", function (code, reason) {
//       console.log("Connection closed")
//   });
// }).listen(port);
//
// console.log('listening on port', port);





// var WebSocketServer = require('ws').Server
// var server = require('http').createServer();
// // var wss = new WebSocketServer({port: 1235});
// var wss = new WebSocketServer({server: server});
//
//
// console.log(require('os').networkInterfaces());

// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
//
// io.on('connection', function(socket){
//   console.log('a user connected');
// });



// board.on('ready', () => {
//   // http.listen(1235, function(){
//   //   console.log('listening on *:3000');
//   // });
//   console.log('Board ready');
//   // wss.on('connection', function(ws) {
//     console.log('Connection established!');
//     gesture.on('right', () => emitGesture('right', ws));
//     gesture.on('left', () => emitGesture('left', ws));
//     gesture.on('up', () => emitGesture('up', ws));
//     gesture.on('down', () => emitGesture('down', ws));
//     gesture.on('vertical', () => emitGesture('vertical', ws));
//     gesture.on('horizontal', () => emitGesture('horizontal', ws));
//   // });
// });

// server.listen(1235, function () {
//   console.log('Listening on http://localhost:1235');
// });
