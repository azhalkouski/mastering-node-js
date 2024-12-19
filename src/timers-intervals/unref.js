/**
 * The `unref` method allows the developer to assert the following
 * instructions: when this timer is the only event source remaining
 * for the event loop to process, go ahead and terminate the process.
 */


// EXAMPLE 1
// const interval = setInterval(() => {
//   console.log('this console log is never gonna be printer');
// }, 100);

// interval.unref();


// EXAMPLE 2
setTimeout(() => {
  console.log("Now stop");
}, 100);

const interval = setInterval(() => {}, 1);
interval.unref();

// ! we can also undo unref
// interval.ref();