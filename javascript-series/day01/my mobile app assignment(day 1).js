/*
 * My JavaScript Operators Assignment
 * File: operators.js
 * 
 * This program demonstrates my understanding of the four main types of operators in JavaScript:
 * Arithmetic, Comparison, Assignment, and Logical operators.
 */

console.log("--- My JavaScript Operators Assignment ---");

// --------------------------------------------------
// 1. ARITHMETIC OPERATORS (Math Operations)
// --------------------------------------------------
console.log("\n1. ARITHMETIC OPERATORS");

// I'll start with two variables for my math examples.
let num1 = 20;
let num2 = 5;
let calculationResult;

// Addition (+)
calculationResult = num1 + num2;
console.log(`Addition (20 + 5): ${calculationResult}`); // Result: 25

// Subtraction (-)
calculationResult = num1 - num2;
console.log(`Subtraction (20 - 5): ${calculationResult}`); // Result: 15

// Multiplication (*)
calculationResult = num1 * num2;
console.log(`Multiplication (20 * 5): ${calculationResult}`); // Result: 100

// Division (/)
calculationResult = num1 / num2;
console.log(`Division (20 / 5): ${calculationResult}`); // Result: 4

// Modulus (%) - Super useful for finding remainders!
calculationResult = num1 % 3;
console.log(`Modulus (20 % 3): ${calculationResult}`); // Result: 2 (because 3*6=18, remainder is 2)

// Exponentiation (**) - Powers!
calculationResult = num2 ** 2; // 5 squared
console.log(`Exponentiation (5 ** 2): ${calculationResult}`); // Result: 25

// Increment (++) and Decrement (--)
let count = 10;
count++; // Adds 1 to count
console.log(`Incremented count: ${count}`); // Result: 11
count--; // Subtracts 1 from count
console.log(`Decremented count: ${count}`); // Result: 10


// --------------------------------------------------
// 2. COMPARISON OPERATORS (Checking Equality/Size)
// --------------------------------------------------
console.log("\n2. COMPARISON OPERATORS");

// These operators always return a boolean (true or false).
let myAge = 30;
let yourAge = 25;
let ageAsString = "30";

// Equal to (==) - Checks value, ignores data type
console.log(`Is myAge (30) equal to ageAsString ("30")? ${myAge == ageAsString}`); // True (it forces the string to a number)

// Strict Equal to (===) - Checks value AND data type (This is generally safer to use)
console.log(`Is myAge (30) strictly equal to ageAsString ("30")? ${myAge === ageAsString}`); // False (one is a number, one is a string)

// Not equal to (!=)
console.log(`Is myAge (30) not equal to yourAge (25)? ${myAge != yourAge}`); // True

// Greater than (>) and Less than (<)
console.log(`Is myAge (30) greater than yourAge (25)? ${myAge > yourAge}`); // True
console.log(`Is myAge (30) less than yourAge (25)? ${myAge < yourAge}`); // False

// Greater/Less than or equal to (>=, <=)
console.log(`Is myAge (30) greater than or equal to 30? ${myAge >= 30}`); // True


// --------------------------------------------------
// 3. ASSIGNMENT OPERATORS (Shorthand for Updating Variables)
// --------------------------------------------------
console.log("\n3. ASSIGNMENT OPERATORS");

let score = 50;
console.log(`My starting score is: ${score}`);

// Add AND assign (+=) - same as `score = score + 10`
score += 10;
console.log(`After adding 10 (+=): ${score}`); // Result: 60

// Subtract AND assign (-=) - same as `score = score - 5`
score -= 5;
console.log(`After subtracting 5 (-=): ${score}`); // Result: 55

// Multiply AND assign (*=) - same as `score = score * 2`
score *= 2;
console.log(`After multiplying by 2 (*=): ${score}`); // Result: 110

// Modulus AND assign (%=) - same as `score = score % 100`
score %= 100;
console.log(`After modulus 100 (%=): ${score}`); // Result: 10 (110 divided by 100 is 1 remainder 10)


// --------------------------------------------------
// 4. LOGICAL OPERATORS (Combining Boolean Logic)
// --------------------------------------------------
console.log("\n4. LOGICAL OPERATORS");

let hasLicense = true;
let hasCar = false;
let isRaining = true;

// Logical AND (&&) - Needs both sides to be true
// Can I drive? Only if I have a license AND a car.
let canDrive = hasLicense && hasCar;
console.log(`Can I drive (License && Car)? ${canDrive}`); // Result: False

// Logical OR (||) - Needs at least one side to be true
// Can I go outside? Yes, if I have a car OR I have an umbrella (let's assume I have an umbrella)
let hasUmbrella = true;
let canGoOutside = hasCar || hasUmbrella;
console.log(`Can I go outside (Car || Umbrella)? ${canGoOutside}`); // Result: True

// Logical NOT (!) - Flips the boolean value
// Is it NOT raining?
let isNotRaining = !isRaining;
console.log(`Is it not raining (!isRaining)? ${isNotRaining}`); // Result: False (because it IS raining)
