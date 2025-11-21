// IF
// SWITCH

const slap = () => console.log("SLAPPING");
const slapBack = () => console.log("SLAPPED YOU BACK");
const warn = () => console.log("Dont slap me or i will retaliate");

const slapped = "maybe maybe";

// if (slapped === "yes") {
//   slapBack();
// } else if (slapped === "no") {
//   slap();
// } else if (slapped === "maybe") {
//   warn();
// } else {
//   console.log("Fight resolved");
// }

switch (slapped) {
  case "yes":
    slapBack();
  case "no":
    slap();
  case "maybe":
    warn();
  default:
    console.log("Fight resolved");
}

// DESTRUCTURING, REST AND SPREAD OPERATORS, FOREACH AND MAP

const arr = ["Akinniyi Ezekiel Wonderful", "Mobile Development", "Student"];
const [fn, c, r] = arr;
// console.log(
//   `My name is ${fn}, i am studying ${c}, and my role is ${r}`
// );

const obj = {
  fullName: fn, // fullName:fullName
  course: c, // course: course
  role: r, // role:role
};

console.log(obj);

const { fullName, course, role } = obj;

// console.log(
//   `My name is ${fullName}, i am studying ${course}, and my role is ${role}`
// );

// SPREAD OPERATOR IN JAVASCRIPT
const arr1 = [67, 89, 78, 56];
const arr2 = [12, 24, 3];

// LHS              RHS
const arr3 = [...arr1, ...arr2]; // combination of arr1 and arr2
// console.log("arr3:", arr3);

const obj1 = {
  name: "Akinniyi Ezekiel Wonderful",
  course: "Mobile development",
};

const obj2 = {
  role: "Student",
  id: 1,
  name: "Favour",
};

const obj3 = {
  ...obj2,
  ...obj1,
};

// console.log("obj3: ", obj3);

// REST OPERATOR

const { name, id, ...rest } = obj3;
const [firstValue, ...rest2] = arr3;

// console.log("rest from obj: ", rest);
// console.log("rest from array: ", rest2);

const sum = (...nums) => {
  return nums.reduce((a, b) => a + b, 0);
};

const sumOfTwo = sum(2, 3, 78, 89, 112, 32, 12, 43, 56, 33, 21);
console.log(sumOfTwo);

// MAP AND FOREACH

const mapForEachArray = [10, 15, 20, 30, 59, 10000];

const mapResult = mapForEachArray.map((value, index) => {
  return value * index;
});

mapForEachArray.forEach((value, index) => {
  console.log(value ** index);
});

console.log("mapResult", mapResult);

// ANONYMOUS FUNCTION

// (() => {})();
// (function(){})()

// IIFE => IMMEDIATELY INVOKED FUNCTION EXPRESSION

((test) => {
  console.log("test from iife", test);
  console.log("yay i ran an iife function");
})(3);

const test = (testValue) => {
  console.log(testValue);
};

test({
  name: "Akinniyi Ezekiel Wonderful",
});
