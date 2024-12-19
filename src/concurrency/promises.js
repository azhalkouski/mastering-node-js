const db = {
  getFullName: Promise.resolve('Jack Spratt'),
  getAddress: Promise.resolve('10 Clean Street'),
  getFavorites: Promise.resolve('Lean'),
};

// all three function will be triggered simultaneously, and will run in parallel.
Promise.all([
  db.getFullName,
  db.getAddress,
  db.getFavorites
])
.then(results => {
  // the order of results will match the order of arr in .all([...])
  console.log(results); // [ 'Jack Spratt', '10 Clean Street', 'Lean' ]
})
.catch((err) => {
  console.log(err);
});


/**
 * .catch will catch all error that occure within .then block
 * 
 * If I use async/await I need to wrap it with try/catch because .catch() will not
 * catch any errors occured while async/await.
 */
