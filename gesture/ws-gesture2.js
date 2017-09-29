const five = require('johnny-five');
const Tessel = require('tessel-io');
const tessel2 = require('tessel');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const Gesture = require('./APDS9960')(five);
const G_THRESHOLD = 15
const G_SENSITIVITY = 0.5
const board = new five.Board({ io: new Tessel() });
const gesture = new Gesture({ pin: 'A2'});

function emitGesture (direction, ws) {
  console.log('Hey?');
  ws.emit(direction)
}

tessel2.network.wifi.connection(function(error, settings) {
  console.log("Connected to wifi")
});


io.on('connection', function(socket){
  console.log('connected');
  socket.emit('intensity', 'hello');


  board.on('ready', () => {

    http.listen(4545, function(){
      console.log('listening on *:3000');
    });

      console.log('Board ready');
      console.log('Connection established!');
      gesture.on('right', () => emitGesture('right', socket));
      gesture.on('left', () => emitGesture('left', socket));
      gesture.on('up', () => emitGesture('up', socket));
      gesture.on('down', () => emitGesture('down', socket));
      gesture.on('vertical', () => emitGesture('vertical', socket));
      gesture.on('horizontal', () => emitGesture('horizontal', socket));

  });
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
