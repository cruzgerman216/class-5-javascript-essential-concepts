function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },

    decrement: function () {
      count--;
      return count;
    },

    getCount: function () {
      return count;
    }
  }
}

let myCounter = counter();

console.log("My count is initially: " + myCounter.getCount());
myCounter.increment();
console.log("My count is now..." + myCounter.getCount());