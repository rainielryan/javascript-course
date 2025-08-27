console.log("Part 2: Functions ready!");

////////////////////////////////////////////////
// // Functions - Declarations and Expressions
console.log(`=== FUNCTIONS ===`);

function logger() {
    console.log(`My name is Rain`);
}

logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 3));

// const juice1 = `Juice with 5 apples and 0 oranges`; 
const juice1 = fruitProcessor(5, 0);
console.log(juice1);


////////////////////////////////
// // Function Expressions 
const calcAge = function (birthYear) {
    return 2035 - birthYear;
};

const age1 = calcAge(1991);
const age2 = calcAge(2004);
console.log(age1);
console.log(age2);

console.log(calcAge(2001));


function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old!`;
    return introduction;
}

console.log(introduce('Rainiel', "Necio", "20"));


///////////////////////////////////
// // Return Values and Scope

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} had already retired.`;
    }
}

console.log(yearsUntilRetirement(2004, "Rainiel"));


// Global Scope
const globalVar = "I am Global";

function testScope() {
    // Function Scope
    const localVar = "I am Local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);


////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   const avgDolphins = (score1 + score2 + score3) / 3;
//   const avgKoalas = (score1 + score2 + score3) / 3;
//   return averageDolphins;
//   return averageKoalas;
// }

function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(averageDolphins, averageKoalas) {
  
    if (averageDolphins >= 2 * averageKoalas) {
        return `Dolphins win ${averageDolphins} vs. ${averageKoalas}`;
    } else if (averageKoalas >= 2 * averageDolphins) {
        return `Koalas win ${averageKoalas} vs. ${averageDolphins}`;
    } else {
        return `No team wins.`;
    }
}

// // Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

