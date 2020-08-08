// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

console.log(typeof(eventEmitter));
console.log(eventEmitter);
// Create an event handler as follows
function connectHandler() {
   console.log('connection succesful.');
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');
console.log(eventEmitter);
console.log("Program Ended.");