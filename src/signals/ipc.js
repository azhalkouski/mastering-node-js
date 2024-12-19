// Inter-Process Communication (IPC)

setInterval(() => {}, 1e6);

process.on("SIGUSR1", () => {
  console.log("Got a signal!");
});


// then run the process
// determine the process' PID by ps aux | grep ./src/signals/ipc.js
// then in another terminal execute `kill -s SIGUSR1 PID`

// that won't actually kill the process, so if you want to kill it you need
// to execute `kill PID` command
