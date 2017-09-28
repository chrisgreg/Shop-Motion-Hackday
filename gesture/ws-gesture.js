const five = require('johnny-five');
const Tessel = require('tessel-io');
const sockets = require('ws');

const Gesture = require('./APDS9960')(five);
const G_THRESHOLD = 5
const G_SENSITIVITY = 0.9
const board = new five.Board({ io: new Tessel() });
const gesture = new Gesture({ pin: 'A2'});

board.on('ready', () => {
  gesture.on('right', () => console.log('right'));
  gesture.on('left', () => console.log('left'));
  gesture.on('up', () => console.log('up'));
  gesture.on('down', () => console.log('down'));
  gesture.on('vertical', () => console.log('vertical'));
  gesture.on('horizontal', () => console.log('horizontal'));
});
