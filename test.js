let stop = false;

setTimeout(() => {
  console.log('inside timeout')
  stop = true;
}, 1000);


// this while loop makes the even loop starve
// the event loop is never given a chance to schedule the timer callback execution
while (stop === false) {
  console.log('ну вот и всё, хаха :)))')
}