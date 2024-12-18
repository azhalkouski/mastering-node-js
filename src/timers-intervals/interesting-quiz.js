const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
let pos = 0;
const messenger = new EventEmitter();

messenger.on("message", (msg) => {
  console.log(++pos, " Message: " + msg);
});

console.log(++pos, " FIRST");

process.nextTick(() => {
  console.log(++pos, " NEXT");
});

setTimeout(() => {
  console.log(++pos, " QUICK TIMER");
}, 0);

setTimeout(() => {
  console.log(++pos, " LONG TIMER");
}, 10);

setImmediate(() => {
  console.log(++pos, " IMMEDIATE");
});

messenger.emit("message", "Hello!");

fs.stat(__filename, () => {
  console.log(++pos, " FIRST STAT");
});

fs.stat(__filename, () => {
  console.log(++pos, " LAST STAT");
});

console.log(++pos, " LAST");


// FIRST
// Hello!
// LAST
// NEXT
// QUICK TIMER
// FIRST STAT
// LAST STAT
// IMMEDIATE
// LONG TIMER