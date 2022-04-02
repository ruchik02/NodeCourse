const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
    setTimeout(()=>{
          console.log("Hello everyone");
    },3000);
});
myEmitter.emit('event');
console.log("the script is running");
console.log("the script is still running");
