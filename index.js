// const event=require('events');
// const EvenEmitter=new event.EventEmitter();
const EventEmitter=require('events');
// const { cachedDataVersionTag } = require('v8');
const event=new EventEmitter();//object

// event.on('sayMyName',()=>{
//     console.log('your name is ruchika sharma');
// })
// event.on('sayMyName',()=>{
//     console.log('Hello guys');
// })
// event.on('sayMyName',()=>{
//     console.log('how are you');
// })
event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit('checkPage',200,'ok');