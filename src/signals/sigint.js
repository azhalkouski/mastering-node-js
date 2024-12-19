console.log("Running");

// After 16 minutes, do nothing
setInterval(() => {}, 1e6);

// Subscribe to SIGINT, so some of out code runs when Node gets the signal CMD + C
process.on("SIGINT", () => {
  console.log("We received the SIGINT signal!");
  process.exit(1);
});
