// Activity 5: Concurrent Promises

// Task 8
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 2000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 1000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 2200)
);
const promise4 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 4 resolved"), 1500)
);

Promise.all([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));

// Task 9
Promise.race([promise1, promise2, promise3, promise4]).then((result) =>
  console.log(result)
);