// ques 1

async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      console.log("Response error:", response.status);
    }
    const users = await response.json();
    users.forEach((user) => console.log(user.name));
  } catch {
    (err) => console.log(err);
  }
}
fetchUserData();

// ques 2
async function chainPromises(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Value should be a number");
    } else {
      resolve(num);
    }
  })
    .then((number) => {
      console.log("Enter first number:", number);
      return number + 10;
    })
    .then((number) => {
      console.log("After adding 10:", number);
      return number * 5;
    })
    .then((number) => {
      console.log("After multiply by 5:", number);
      return number / 2;
    })
    .then((number) => {
      console.log("After divide by 2:", number);
      return number;
    })
    .catch((err) => console.log(err));
}
chainPromises(10);

// ques 3

const counter = () => {
  let count = 0;

  function increment() {
    count++;
  }

  function getValue() {
    return count;
  }
};

const myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());

// ques 4
const createMultiplier = function (n) {
  return function (m) {
    return m * n;
  };
};

const double = createMultiplier(2);
console.log(double(5));

const triple = createMultiplier(3);
console.log(triple(5));
