run server.js, then run client.js

We can now type something like `console.log("hello");` into the client terminal,
and see hello displayed.

To confirm that the execution of our JavaScript commands is occuring in the
server instance, type `console.log(process.argv);` into the client, and the server
will display an object containing the current process path, which will be `server.js`.

With just a few lines of code, we've created a way to remotly control Node precesses.
It's the first step towards multi-node analytics tools, remote memory management,
auromatic server administration, and more.