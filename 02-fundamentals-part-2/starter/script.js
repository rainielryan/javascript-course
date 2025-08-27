// console.log("Part 2: Functions ready!");

// ////////////////////////////////////////////////
// // // Functions - Declarations and Expressions
// console.log(`=== FUNCTIONS ===`);

// function logger() {
//     console.log(`My name is Rain`);
// }

// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 3));

// // const juice1 = `Juice with 5 apples and 0 oranges`; 
// const juice1 = fruitProcessor(5, 0);
// console.log(juice1);


// ////////////////////////////////
// // // Function Expressions 
// const calcAge = function (birthYear) {
//     return 2035 - birthYear;
// };

// const age1 = calcAge(1991);
// const age2 = calcAge(2004);
// console.log(age1);
// console.log(age2);

// console.log(calcAge(2001));


// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old!`;
//     return introduction;
// }

// console.log(introduce('Rainiel', "Necio", "20"));


// ///////////////////////////////////
// // // Return Values and Scope

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`;
//     } else {
//         return `${firstName} had already retired.`;
//     }
// }

// console.log(yearsUntilRetirement(2004, "Rainiel"));


// // Global Scope
// const globalVar = "I am Global";

// function testScope() {
//     // Function Scope
//     const localVar = "I am Local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);


// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// // function calcAverage(score1, score2, score3) {
// //   const avgDolphins = (score1 + score2 + score3) / 3;
// //   const avgKoalas = (score1 + score2 + score3) / 3;
// //   return averageDolphins;
// //   return averageKoalas;
// // }

// function calcAverage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }

// // Function to check winner
// function checkWinner(averageDolphins, averageKoalas) {
  
//     if (averageDolphins >= 2 * averageKoalas) {
//         return `Dolphins win ${averageDolphins} vs. ${averageKoalas}`;
//     } else if (averageKoalas >= 2 * averageDolphins) {
//         return `Koalas win ${averageKoalas} vs. ${averageDolphins}`;
//     } else {
//         return `No team wins.`;
//     }
// }

// // // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));





////////////////////////////////////////////////////////
// // JavaScript Fundamentals Part 2 - Hour 2

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// ////////////////////////////////////
// // Arrays - Creation and Access
// console.log("=== ARRAYS ===");


// const friends = ["Rain", "Gel", "Gwen"];
// console.log(friends);

// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // array starts counting at 0
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends.length - 1)

// friends[1] = "Angel";
// console.log(friends);


// const firstName = "Rain"
// const rain = [firstName, "Necio", 2025 - 2004];
// console.log(rain);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const ages = [calcAge(2000), calcAge(2004), calcAge(2005)];
// console.log(ages);


// ////////////////////////////////////
// // Array Methods - Adding Elements

// const newLength = friends.push("Gel");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Angel");
// console.log(friends);

// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(popped2);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// const Length = friends.push("Gwen");
// console.log(friends);



// console.log(friends.indexOf("Rain"));
// console.log(friends.indexOf("Gwen"));

// console.log(friends.includes("Angel"));
// console.log(friends.includes("Gel"));


// ////////////////////////////////////
// // Array Iteration - Loops

// for (let i = 0; i < friends.length; i++) {
//     const element = friends [i];
//     console.log(friends[i]);    
// }


// friends.forEach(
//     function(friends, index) {
//         console.log(`Friend ${index}: ${friends}`);
//     }
// );

// friends.forEach(
//     (friend, index) => {
//         console.log(`Friend ${index + 1}: ${friend}`);
//     }
// );

// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// // Calculate average grade
// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];    
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grades2) => {
//     if (grades2 >= 70) passedCount++;
// });

// console.log(`${passedCount} out of ${grades2.length} students passed`);



////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];


// Function to calculate average
function calculateAverage(grades) {
    let total = 0
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    return total / grades.length;
}


// Function to find highest grade
function findHighestGrade(grades) {
    let largest = grades[0];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > largest) {
            largest = grades[i];
        }
    }
    return largest;
    
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let smallest = grades[0];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < smallest) {
            smallest = grades[i];
        }
    }
    return smallest
  // Hint: Similar to highest, but use < comparison
}

// Function to count passing students
function countPassing(grades, passingGrade) {
    let passedCount = 0;
    grades.forEach((grade) => {
        if (grade >= 70) passedCount++;
    });
    return passedCount
  // Your code here
  // Hint: Counter pattern - increment when condition is met
}

// Generate complete report
const average = calculateAverage(grades);
const largest = findHighestGrade(grades);
const smallest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${largest}`);
console.log(`Lowest: ${smallest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
















































