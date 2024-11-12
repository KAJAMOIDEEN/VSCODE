var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

var myEvent = function () {
  console.log('this is an Event!');
}

//Assign the eventhandler to an event:
eventEmitter.on('myevent',myEvent);
eventEmitter.on('myEventHandler',myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('myevent');
eventEmitter.emit('myEventHandler')