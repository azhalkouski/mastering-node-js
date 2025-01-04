const stream = require('stream');

// example of a readable stream creation
const readable = new stream.Readable({
  encoding: "utf-8", // decode buffers into specified encoding, default is utf-8
  // number of bytes to keep in the internal buffer, default is 16KB
  highWaterMark: 160000, // 16000 bytes or 16KB
  // tell the stream to behave as a stream of objects instead of stream of bytes
  objectMode: true, // default is false
});


// example 1: objectMode: false
const Feed = function(channel) {
  const readable = new stream.Readable({});
  const news = [
    "Big Win!",
    "Stock Down!",
    "Actor Sad!"
  ];
  readable._read = () => {
    if(news.length) {
      return readable.push(news.shift() + "\n");
    }
    readable.push(null);
  };
  return readable;
};

const feed = new Feed();

feed.on("readable", () => { // we have an event
  const data = feed.read(); // we read
  data && process.stdout.write(data);
});

feed.on("end", () => {
  console.log("No more news");
});


// example 2: objectMode: true
const FeedObjectMode = function(channel) {
  const readable = new stream.Readable({
    objectMode: true
  });

  const prices = [{price: 1}, {price: 2}];

  readable._read = () => {
    // idea for an expariment: delete .length and leave prices only. check memory consumption
    if (prices.length) {
      return readable.push(prices.shift());
    }
    readable.push(null);
  };

  return readable;
};

const feedObjectMode = new FeedObjectMode();

feedObjectMode.on("readable", () => {
  const data = feedObjectMode.read();
  data && console.log(data);
});

feedObjectMode.on("end", () => {
  console.log("No more news");
});



// reading one byte at a time
const FeedByteAtTime = function(channel) {
  const readable = new stream.Readable({});
  const news = "A long heading might go here";
  readable._read = () => {
    readable.push(news);
    readable.push(null);
  };

  return readable;
};

const feedOneByteAtATime = new FeedByteAtTime();

feedOneByteAtATime.on("readable", () => {
  let character;
  // .read(1) - read 1 byte at a time
  while(character = feedOneByteAtATime.read(1)) {
    console.log(character.toString());
  }
});

feedOneByteAtATime.on("end", () => {
  console.log("End on one byte at a time read")
});
