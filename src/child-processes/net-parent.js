/**
 * Another very powerful idea is to pass a network server object to a child.
 * This technique allows multiple processes, including the parent, to share
 * the responsibility for serving connection requests, spreading load across cores.
 */

const path = require("path");
const child = require("child_process").fork(path.join(__dirname, "net-child.js"));
const server = require("net").createServer();

server.on("connection", (socket) => {
  socket.end("Parent handled connection");
});

server.listen(8080, () => {
  child.send("Parent passing down server", server);
});
