/* // 01. Destructuring Arrays
const arr = [10, 20, 30, 40, 50];

// const firstNum = arr.at(0);

const [firstNum, secondNum, , fourthNum] = arr;

console.log(firstNum, secondNum, fourthNum); */

/* // 02. Destructuring Objects
const student = {
  firstName: "Rifat",
  lastName: "Rahman",
  birthYear: 1997,
};

const { firstName, lastName } = student;

console.log(firstName, lastName); */

// 03. The Spread Operator (...)
/* const arr = [1, 2, 3, 4, 5];

const newArr = [...arr];

newArr.pop();

// console.log(newArr);
// console.log(arr);

const human = {
  name: "Hacker boy amzad",
  language: "Turmane",
};

const animal = { ...human };
animal.name = "Tiger";

console.log(animal);
console.log(human); */

// 04. Rest Pattern and Parameters
/* const friends = ["nibir", "tumpa", "nahid", "ayesha"];

const [oldFriend, , ...otherFriends] = friends;

// console.log(oldFriend, otherFriends);

const user = {
  name: "John",
  age: 24,
  income: 15000,
  skills: "js, ts",
};

const { name, skills, ...rest } = user;

console.log(name, skills, rest);
 */

// 05. Short Circuiting (&& and ||)
/* let money = 0;

// money >= 300 && console.log("I am rich.");
// console.log(money >= 300) || console.log(money === 50);

money || (money = 10);

console.log(money); */

// 06. The Nullish Coalescing Operator (??)
/* let money = undefined;

money ?? (money = 10);

console.log(money);
 */

// 07. Enhanced Object Literals

/* const burgerPrice = 250;

const restaurant = {
  name: "Puran Dhaka Burger Cafe",
  burgerPrice, // Enhanced Object Literals
};
 */

// 08. Optional Chaining (?.)
/* const obj = {
  title: "JS",
  frameworks: [
    {
      dist: "angular",
      meta: "unknown",
      year: 2010,
    },
    {
      dist: "vue",
      meta: {
        offset: "TT-1",
        frequency: {
          // pearlDate: "Unknown",
        },
      },
      year: 2016,
    },
  ],
};

console.log(obj.frameworks[1].meta?.frequency?.pearlDate?.title); */

/* // 09. Looping Objects: Object Keys, Values, and Entries

const player = {
  name: "Messi",
  country: "Argentina",
  goals: "500",
  awards: "Unknown",
};

const playerKeys = Object.keys(player);

// console.log(playerKeys);

// 10. Looping Arrays: The for-of Loop

for (const key of playerKeys) {
  // console.log(key);
}

const playerValues = Object.values(player);

// console.log(playerValues);

for (const value of playerValues) {
  // console.log(value);
}

const playerEntries = Object.entries(player);

console.log(playerEntries);

for (const [key, value] of playerEntries) {
  console.log(key, value);
}
 */

// 12. The this Keyword
/* var birthYear = 1980;

const student1 = {
  name: "tumpa",
  birthYear: 1995,

  calcAge: () => {
    console.log(this);
    console.log(new Date().getFullYear() - this.birthYear);
  },
};

const student2 = {
  name: "ayesha",
  birthYear: 2002,
  calcAge: student1.calcAge,
};

student2.calcAge();
 */

/* // 13. Regular Functions vs. Arrow Functions
// console.log(sum(2, 3));

function sum(a, b = 0) {
  return a + b;
}

const product = function (x, y) {
  return x * y;
};

// console.log(product(10, 5));

const difference = (m, n) => m - n;

// console.log(difference(10, 3));

// 14. Default Parameters
function doMath(num1, num2, ...others) {
  // console.log(num1, num2, others);

  return num1 + num2;
}

const arr = [4, 6, 8, 10, 12, 14];

// console.log(doMath(...arr)); */
