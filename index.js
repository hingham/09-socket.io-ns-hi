'use strict';

const io = require('socket.io')(3000);
const helper = require('./lib/helper.js');

let counter = 0;

let upper = helper.chgLetNum('A');
let lower = helper.chgLetNum('a');

const numbers = io.of('/numbers');
const letters = io.of('/letters');

numbers.on('connection', (socket)=>{
  console.log('connected to numbers', socket.id);

  //connect to a room inside of numbers
  socket.on('join', (room, cb) =>{
    socket.join(room);
    cb && cb(`Joined ${room}`);
  });

  socket.on('next-number', () =>{
    // counter+=1;
    socket.broadcast.emit('number', ++counter);
    socket.to('negative').emit('_number', counter * -1);
  });

});

letters.on('connection', (socket) =>{
  console.log('connected to letters ', socket.id);

  socket.on('join', (room, cb)=>{
    socket.join(room);
    cb && cb(`joined ${room}`);
  });

  socket.on('next-letter', ()=>{

    upper = helper.letterChange(upper, 64, 90);
    lower = helper.letterChange(lower, 96, 122);
    socket.broadcast.emit('letter', helper.chgLetNum(upper) );
    socket.to('lowercase').emit('_letter', helper.chgLetNum(lower));
  });
});




