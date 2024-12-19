const cp = require("child_process");

/**
 * You can keep any number of subprocesses running with this method. On multicore
 * machines, the OS will distribute forked processes across the available hardware
 * cores. Spreading Node processes across cores, even onto other machines, and
 * managing IPC is one way to scale a  Node application in a stable, understandabel,
 * and predictable way.
 */
const child = cp.fork(__dirname + "/lovechild.js");

child.on("message", (m) => {
  // Parent got a massage up from our child
  console.log("Child said: ", m);
});

// Send a massage down to our child
child.send("I love you");
