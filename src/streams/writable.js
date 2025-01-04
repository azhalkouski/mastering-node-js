const stream = require("stream");

const writableExample = new stream.Writable({
  highWaterMark: 16000,
  // whether to convert strings into buffers before writing.
  decodeStrings: true, // default is true
});


const writable = new stream.Writable({
  decodeStrings: false
});

writable._write = (chunk, encoding, callback) => {
  console.log(chunk.toString());
  callback();
};

const written = writable.write(Buffer.alloc(32, 'A'));
writable.end();

console.log(written);