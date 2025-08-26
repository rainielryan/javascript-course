// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!

// // // let js = "amazing ";
// // // console.log(40 + 8 + 23 - 10);
// // // console.log("GUMANA KA");


// // // console.log("=== VARIABLES ===");

// // // let firstName = "Rainiel";
// // // console.log(firstName)

// // // let age = 16;
// // // console.log(age);
// // // age = 20;
// // // console.log(age);

// // // const birthYear = 2004;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // var job = "programmer";
// // // job = "teacher";
// // // console.log(job);

// // // age = 21;

// // // let lastName = "Necio";

// // // console.log("=== DATA TYPES ===")

// // // // Number
// // // age = 23;
// // // console.log(age);
// // // console.log(typeof age);

// // // // String
// // // let username = "josh";
// // // console.log(username);
// // // console.log(typeof username);

// // // //Boolean
// // // let javaScriptIsFun = true;
// // // console.log(javaScriptIsFun);
// // // console.log(typeof javaScriptIsFun);

// // // let year;
// // // console.log(year);
// // // console.log(typeof year);

// // // // Dynamic Variable
// // // let dynamicVariable = 23;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // Change to String
// // // dynamicVariable = "string ako ngayon";
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // Change to Boolean
// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // /////////////////////////////////////////////////////////////////
// // // Basic Operations - Math operators
// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageRainiel = now - 2004;
// // const ageJosh = now - 2018;
// // console.log (ageRainiel, ageJosh);

// // console.log(ageRainiel * 2, ageRainiel / 10, 2 ** 3);

// // console.log("Math Operations: ");
// // console.log("Addition: ", 10 + 5);
// // console.log("Subtraction: ", 20 - 8);
// // console.log("Multiplication; ", 4 * 7);
// // console.log("Division: ", 15 / 3);
// // console.log("Exponentiation: ", 2 ** 3);

// // // Made with strings!
// // const firstName = "Rainiel";
// // const lastName = "Necio";
// // console.log(firstName + " " + lastName);

// // console.log("Hello " + "World" + "!");
// // console.log("I am " + 25 + " years old");

// // // Assignment operators
// // console.log("=== ASSIGNMENT OPERATORS===");

// // let x = 10 + 5;
// // console.log("x starts as:", x);

// // x += 10;
// // console.log("After x += 10:", x);

// // x *= 4;
// // console.log("After x *= 4:", x);

// // x /= 2;
// // console.log("After x /= 2:", x);

// // x++;
// // console.log("After x++:", x);

// // x--;
// // x--;
// // console.log("After x-- twice:", x);

// // // Comparison Operators
// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("Age comparison");
// // console.log(ageRainiel > ageJosh);
// // console.log(ageRainiel >= 18);
// // console.log(ageJosh < 30);

// // console.log("Number comparisons");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // const isFullAge = ageJosh >= 18;
// // console.log("Sarah is adult:", isFullAge);

// // const isRainielOlder = ageRainiel > ageJosh;
// // console.log("Rainiel is older:", isRainielOlder);

// // console.log("Complex comparison:");
// // console.log(now - 2004 > now - 2018);

// // let z, y;
// // z = y = 25 - 10 - 5;
// // console.log(z, y);

// // const averageAge = (ageRainiel + ageJosh) / 2;
// // console.log(ageRainiel, ageJosh, averageAge);

// // // // Operator Precedence
// // console.log("=== OPERATOR PRECEDENCE ===");

// // const now = 2037;
// // const ageRainiel = now - 2004;  
// // const ageJosh = now - 2018;

// // console.log(now - 2004, now - 2018);

// // let x, y;
// // x = y = 25 - 10 - 5; 
// // console.log(x, y);

// // const averageAge = (ageRainiel + ageJosh) / 2;
// // console.log(ageRainiel, ageJosh, averageAge);

// // ///////// BMI Calculator
// // console.log("=== BMI Calculator ===")

// // // Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // bmiMark = massMark / heightMark ** 2;
// // console.log("The BMI of Mark is: ", bmiMark);

// // bmiJohn = massJohn / heightJohn ** 2;
// // console.log("The BMI of John is: ", bmiJohn);

// // const markHigherBMI = bmiMark > bmiJohn;
// // console.log("Mark has a Higher BMI than John: ", markHigherBMI);

// // // Test Data 2
// // const massMark2 = 95;
// // const heightMark2 = 1.88;
// // const massJohn2 = 85;
// // const heightJohn2 = 1.76;

// // bmiMark2 = massMark2 / heightMark2 ** 2;
// // console.log("The BMI of Mark is: ", bmiMark);

// // bmiJohn2 = massJohn2 / heightJohn2 ** 2;
// // console.log("The BMI of John is: ", bmiJohn2);

// // const markHigherBMI2 = bmiMark2 > bmiJohn2;
// // console.log("Mark has a Higher BMI than John: ", markHigherBMI2);


// // // // // // JavaScript Fundamentals - Hour 3
// ////////////////////////////////////////////////////////////////////////
// // Strings and Template Literals
// // const firstName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1991;
// // const year = 2037;

// // const jonas =
// //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // console.log(jonas);

// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// // console.log(jonasNew);

// // console.log(`I'm ${2037 - 1991} years old`);
// // console.log(`Math works: ${2 + 3}, equals 5`);
// // console.log(`Comparisons too: ${5 > 3}`);

// // console.log(`Just a regular string...`);

// // Old way
// console.log(
//     "String with \n\
//     multiple \n\
//     lines"
// );

// // New way
// console.log(`String 
//     multiple 
//     lines`);

// // Create Variables for:
// const myName = "Rainiel";
// const myAge = 20;
// const myJob = "Student";
// const currentYear = 2024;

// console.log(`Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`);

// // Create a template literal that:
// console.log(`My birth year is ${currentYear - myAge}.`);
// console.log(`10 multiplied by 5 is: ${10 * 5}.`);
// console.log(`I am younger than 50 years old: ${myAge < 50}.`);

// // // Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving license 🚗");
// } else { 
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);


// const score = 85;

// if (score >= 60) {
//     console.log(`You passed with ${score} points!`);
//     console.log("Congratulations!");
// } else { 
//     const pointsNeeded = 60 - score;
//     console.log(`You failed, you need ${pointsNeeded} more points to pass.`);
// }


// // Create a Grade Calculator

// const testScore = 93;

// // Use if/else to determine:
// // 90+: "Excellent! Grade A"
// // 80-89: "Good job! Grade B"
// // 70-79: "Not bad! Grade C"
// // 60-69: "You passed! Grade D"
// // Below 60: "You failed! Study harder"


// if (testScore >= 90) {
//     console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//     console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//     console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//     console.log("You passed! Grade D");
// } else {
//     console.log("You failed! Study harder");
// }


// // Create an age verification system:

// const userAge = 11; 

// // Rules:
// // - 18+: "Welcome! You can access all content"
// // - 13-17: "Welcome! Restricted content only"
// // - Under 13: "Sorry, you're too young"

// if (userAge >= 18) {
//     console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//     console.log("Welcome! Restricted content only");
// } else {
//     console.log("Sorry, you're too young");
// }


// ///////////////////////////
// // Truthy and Falsy Values

// console.log(Boolean(0)); 
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }


// // // Test these values with Boolean() and if statements:
// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// // For each value, log:
// // 1. The value itself
// // 2. Boolean(value)
// // 3. Whether it passes an if statement

// // Example for first value:
// console.log("Value:", 0);
// console.log("Boolean:", Boolean(0));
// if (0) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }

// console.log("Value:", 1);
// console.log("Boolean:", Boolean(1));
// if (1) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }

// console.log("Value:", "");
// console.log("Boolean:", Boolean(""));
// if ("") {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }

// console.log("Value:", "hello");
// console.log("Boolean:", Boolean("hello"));
// if ("hello") {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }

// console.log("Value:", undefined);
// console.log("Boolean:", Boolean(undefined));
// if (undefined) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }

// console.log("Value:", null);
// console.log("Boolean:", Boolean(null));
// if (null) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }

// console.log("Value:", NaN);
// console.log("Boolean:", Boolean(NaN));
// if (NaN) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }

// console.log("Value:", {});
// console.log("Boolean:", Boolean({}));
// if ({}) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }

// console.log("Value:", []);
// console.log("Boolean:", Boolean([]));
// if ([]) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }


// ////////////////////////////////////
// // Coding Challenge #2
// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// bmiMark = massMark / heightMark ** 2;
// bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiMark, bmiJohn);

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}`);
// }   else {
//     console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}`);
// }


// // // // JavaScript Fundamentals - Hour 4
//////////////////////////
// // Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Automatic Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' * '2');

let n = "1" + 1;
console.log(n);

n = n - 1;
console.log(n);

// type conversion = explicit/manual (recommended)
// type coercion = automatic (javascript does itself)

// Equality - Strict

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18); // only checks value, not type
// console.log(18 === 18);

// why == can be dangerous
console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

console.log("" == 0);
console.log("   " == 0);

// best practice
// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// userInput = '25';

// if (favorite == 25) {
//   console.log("Cool! 25 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else if (favorite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 25?");

console.log('hello');


// // Logical Operators

const hasDriversLicense = false;
const hasGoodVision = true;

console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Rain is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// More complex scenario
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const age = 19;
// const hasID = true;
// const isVIP = true;

// // Your logic here:
// if ((age >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
// } else {
//   console.log('Sorry, you cannot enter');
// }

// // The Conditional (Ternary) Operator

// const age = 23;

// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// // if/else
// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }

// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);


////////////////////////////////////
// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

