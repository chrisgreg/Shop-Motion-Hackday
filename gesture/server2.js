'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 4545;
const INDEX = path.join(__dirname, 'ambient.html');

const server = express()
 // .use((req, res) => res.sendFile(INDEX) )
  .use(express.static('public'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));

  ws.onmessage = function (event) {
    console.log( 'Emitting data: ' ,  event.data );
    wss.clients.forEach((client) => {
      client.send(event.data);
    });

  };

});
