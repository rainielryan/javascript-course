// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// // let js = "amazing ";
// // console.log(40 + 8 + 23 - 10);
// // console.log("GUMANA KA");


// // console.log("=== VARIABLES ===");

// // let firstName = "Rainiel";
// // console.log(firstName)

// // let age = 16;
// // console.log(age);
// // age = 20;
// // console.log(age);

// // const birthYear = 2004;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "programmer";
// // job = "teacher";
// // console.log(job);

// // age = 21;

// // let lastName = "Necio";

// // console.log("=== DATA TYPES ===")

// // // Number
// // age = 23;
// // console.log(age);
// // console.log(typeof age);

// // // String
// // let username = "josh";
// // console.log(username);
// // console.log(typeof username);

// // //Boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // // Dynamic Variable
// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // // Change to String
// // dynamicVariable = "string ako ngayon";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // // Change to Boolean
// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);

// /////////////////////////////////////////////////////////////////
// // Basic Operations - Math operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageRainiel = now - 2004;
// const ageJosh = now - 2018;
// console.log (ageRainiel, ageJosh);

// console.log(ageRainiel * 2, ageRainiel / 10, 2 ** 3);

// console.log("Math Operations: ");
// console.log("Addition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multiplication; ", 4 * 7);
// console.log("Division: ", 15 / 3);
// console.log("Exponentiation: ", 2 ** 3);

// // Made with strings!
// const firstName = "Rainiel";
// const lastName = "Necio";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old");

// // Assignment operators
// console.log("=== ASSIGNMENT OPERATORS===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);

// x++;
// console.log("After x++:", x);

// x--;
// x--;
// console.log("After x-- twice:", x);

// // Comparison Operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison");
// console.log(ageRainiel > ageJosh);
// console.log(ageRainiel >= 18);
// console.log(ageJosh < 30);

// console.log("Number comparisons");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageJosh >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isRainielOlder = ageRainiel > ageJosh;
// console.log("Rainiel is older:", isRainielOlder);

// console.log("Complex comparison:");
// console.log(now - 2004 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageRainiel + ageJosh) / 2;
// console.log(ageRainiel, ageJosh, averageAge);

// // Operator Precedence
console.log("=== OPERATOR PRECEDENCE ===");

const now = 2037;
const ageRainiel = now - 2004;  
const ageJosh = now - 2018;

console.log(now - 2004, now - 2018);

let x, y;
x = y = 25 - 10 - 5; 
console.log(x, y);

const averageAge = (ageRainiel + ageJosh) / 2;
console.log(ageRainiel, ageJosh, averageAge);

// ///////// BMI Calculator
// console.log("=== BMI Calculator ===")

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// bmiMark = massMark / heightMark ** 2;
// console.log("The BMI of Mark is: ", bmiMark);

// bmiJohn = massJohn / heightJohn ** 2;
// console.log("The BMI of John is: ", bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log("Mark has a Higher BMI than John: ", markHigherBMI);

// // Test Data 2
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// bmiMark2 = massMark2 / heightMark2 ** 2;
// console.log("The BMI of Mark is: ", bmiMark);

// bmiJohn2 = massJohn2 / heightJohn2 ** 2;
// console.log("The BMI of John is: ", bmiJohn2);

// const markHigherBMI2 = bmiMark2 > bmiJohn2;
// console.log("Mark has a Higher BMI than John: ", markHigherBMI2);




























///////////////////////////////////////////
// Type Conversion and Coercion
