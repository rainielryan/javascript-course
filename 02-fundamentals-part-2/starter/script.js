// // // console.log("Part 2: Functions ready!");

// // // ////////////////////////////////////////////////
// // // // // Functions - Declarations and Expressions
// // // console.log(`=== FUNCTIONS ===`);

// // // function logger() {
// // //     console.log(`My name is Rain`);
// // // }

// // // logger();
// // // logger();
// // // logger();


// // // function fruitProcessor(apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // }

// // // console.log(fruitProcessor(5, 3));

// // // // const juice1 = `Juice with 5 apples and 0 oranges`; 
// // // const juice1 = fruitProcessor(5, 0);
// // // console.log(juice1);


// // // ////////////////////////////////
// // // // // Function Expressions 
// // // const calcAge = function (birthYear) {
// // //     return 2035 - birthYear;
// // // };

// // // const age1 = calcAge(1991);
// // // const age2 = calcAge(2004);
// // // console.log(age1);
// // // console.log(age2);

// // // console.log(calcAge(2001));


// // // function introduce(firstName, lastName, age) {
// // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old!`;
// // //     return introduction;
// // // }

// // // console.log(introduce('Rainiel', "Necio", "20"));


// // // ///////////////////////////////////
// // // // // Return Values and Scope

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge(birthYear);
// // //     const retirement = 65 - age;

// // //     if (retirement > 0) {
// // //         return `${firstName} retires in ${retirement} years.`;
// // //     } else {
// // //         return `${firstName} had already retired.`;
// // //     }
// // // }

// // // console.log(yearsUntilRetirement(2004, "Rainiel"));


// // // // Global Scope
// // // const globalVar = "I am Global";

// // // function testScope() {
// // //     // Function Scope
// // //     const localVar = "I am Local";
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // // }

// // // testScope();
// // // console.log(globalVar);


// // // ////////////////////////////////////
// // // // Coding Challenge #1

// // // // Function to calculate average of 3 scores
// // // // function calcAverage(score1, score2, score3) {
// // // //   const avgDolphins = (score1 + score2 + score3) / 3;
// // // //   const avgKoalas = (score1 + score2 + score3) / 3;
// // // //   return averageDolphins;
// // // //   return averageKoalas;
// // // // }

// // // function calcAverage(score1, score2, score3) {
// // //     return (score1 + score2 + score3) / 3;
// // // }

// // // // Function to check winner
// // // function checkWinner(averageDolphins, averageKoalas) {
  
// // //     if (averageDolphins >= 2 * averageKoalas) {
// // //         return `Dolphins win ${averageDolphins} vs. ${averageKoalas}`;
// // //     } else if (averageKoalas >= 2 * averageDolphins) {
// // //         return `Koalas win ${averageKoalas} vs. ${averageDolphins}`;
// // //     } else {
// // //         return `No team wins.`;
// // //     }
// // // }

// // // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));





// // ////////////////////////////////////////////////////////
// // // // JavaScript Fundamentals Part 2 - Hour 2

// // // const student1Grade = 85;
// // // const student2Grade = 92;
// // // const student3Grade = 78;

// // // const grades = [85, 92, 78, 96, 88];
// // // console.log(grades);

// // // ////////////////////////////////////
// // // // Arrays - Creation and Access
// // // console.log("=== ARRAYS ===");


// // // const friends = ["Rain", "Gel", "Gwen"];
// // // console.log(friends);

// // // const mixed = ["Jonas", 27, true, friends];
// // // console.log(mixed);

// // // const years = new Array(1991, 1984, 2008, 2020);
// // // console.log(years);

// // // // array starts counting at 0
// // // console.log(friends[0]);
// // // console.log(friends[2]);

// // // console.log(friends.length);

// // // console.log(friends.length - 1)

// // // friends[1] = "Angel";
// // // console.log(friends);


// // // const firstName = "Rain"
// // // const rain = [firstName, "Necio", 2025 - 2004];
// // // console.log(rain);

// // // const calcAge = function (birthYear) {
// // //     return 2025 - birthYear;
// // // };

// // // const ages = [calcAge(2000), calcAge(2004), calcAge(2005)];
// // // console.log(ages);


// // // ////////////////////////////////////
// // // // Array Methods - Adding Elements

// // // const newLength = friends.push("Gel");
// // // console.log(friends);
// // // console.log(newLength);

// // // friends.unshift("Angel");
// // // console.log(friends);

// // // const popped = friends.pop();
// // // const popped2 = friends.pop();
// // // console.log(popped);
// // // console.log(popped2);
// // // console.log(friends);

// // // const shifted = friends.shift();
// // // console.log(shifted);
// // // console.log(friends);

// // // const Length = friends.push("Gwen");
// // // console.log(friends);



// // // console.log(friends.indexOf("Rain"));
// // // console.log(friends.indexOf("Gwen"));

// // // console.log(friends.includes("Angel"));
// // // console.log(friends.includes("Gel"));


// // // ////////////////////////////////////
// // // // Array Iteration - Loops

// // // for (let i = 0; i < friends.length; i++) {
// // //     const element = friends [i];
// // //     console.log(friends[i]);    
// // // }


// // // friends.forEach(
// // //     function(friends, index) {
// // //         console.log(`Friend ${index}: ${friends}`);
// // //     }
// // // );

// // // friends.forEach(
// // //     (friend, index) => {
// // //         console.log(`Friend ${index + 1}: ${friend}`);
// // //     }
// // // );

// // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // let total = 0;

// // // // Calculate average grade
// // // for (let i = 0; i < grades2.length; i++) {
// // //     total += grades2[i];    
// // // }

// // // const average = total / grades2.length;
// // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // let passedCount = 0;
// // // grades2.forEach((grades2) => {
// // //     if (grades2 >= 70) passedCount++;
// // // });

// // // console.log(`${passedCount} out of ${grades2.length} students passed`);



// // ////////////////////////////////////
// // // Coding Challenge #2 - Student Grade Manager

// // const grades = [78, 85, 92, 67, 88, 95, 73, 82];


// // // Function to calculate average
// // function calculateAverage(grades) {
// //     let total = 0
// //     for (let i = 0; i < grades.length; i++) {
// //         total += grades[i];
// //     }

// //     return total / grades.length;
// // }


// // // Function to find highest grade
// // function findHighestGrade(grades) {
// //     let largest = grades[0];

// //     for (let i = 0; i < grades.length; i++) {
// //         if (grades[i] > largest) {
// //             largest = grades[i];
// //         }
// //     }
// //     return largest;
    
// // }

// // // Function to find lowest grade
// // function findLowestGrade(grades) {
// //   let smallest = grades[0];

// //     for (let i = 0; i < grades.length; i++) {
// //         if (grades[i] < smallest) {
// //             smallest = grades[i];
// //         }
// //     }
// //     return smallest
// //   // Hint: Similar to highest, but use < comparison
// // }

// // // Function to count passing students
// // function countPassing(grades, passingGrade) {
// //     let passedCount = 0;
// //     grades.forEach((grade) => {
// //         if (grade >= 70) passedCount++;
// //     });
// //     return passedCount
// //   // Your code here
// //   // Hint: Counter pattern - increment when condition is met
// // }

// // // Generate complete report
// // const average = calculateAverage(grades);
// // const largest = findHighestGrade(grades);
// // const smallest = findLowestGrade(grades);
// // const passing = countPassing(grades, 70);

// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${average.toFixed(2)}`);
// // console.log(`Highest: ${largest}`);
// // console.log(`Lowest: ${smallest}`);
// // console.log(`Passing students: ${passing} out of ${grades.length}`);



// // //////////////////////////////////////////////////
// // // // // JavaScript Fundamentals Part 2 - Hour 3

// // // // Problems with Arrays
// // const rainArray = [
// //   "Rainiel",
// //   "Necio",
// //   2037 - 2004,
// //   "student",
// //   ["Michael", "Peter", "Steven"],
// // ];

// // console.log(rainArray[0]); 
// // console.log(rainArray[1]); 


// // const rainObject = {
// //     firstName: "Rainiel",
// //     lastName: "Necio",
// //     age: 2025 - 2004,
// //     job: "student",
// //     friends: ["Gel", "Gwen", "Yuan"],
// // };

// // console.log(rainObject);

// // // // Property access methods
// // // Dot notation
// // console.log(rainObject.firstName);
// // console.log(rainObject.lastName);
// // console.log(rainObject.age);

// // // Bracket notation
// // console.log(rainObject["firstName"]);
// // console.log(rainObject["lastName"]);
// // console.log(rainObject["age"]);

// // const nameKey = "Name";
// // console.log(rainObject["first" + nameKey]);


// // // Modifying existing properties
// // rainObject.job = "programmer";
// // rainObject["age"] = 25;
// // console.log(rainObject);


// // // add new properties
// // rainObject.location = "Philippines";
// // rainObject["instagram"] = "@rnlryan";
// // rainObject.hasDriverLicense = true;
// // console.log(rainObject);

// // const property = "job";
// // console.log(rainObject[property]);

// // // 1. Property name is in a variable
// // // 2. Property name has spaces or special characters
// // // 3. Property name is computed/dynamic
// // // Otherwise, use dot notation


// // // // Objects vs Arrays Desicion Making

// // // Arrays
// // const listOfYears = [1991, 1984, 2008, 2020];
// // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // const testScores = [85, 92, 78, 96];

// // // Objects
// // const person = {
// //   name: "Jonas",
// //   age: 46,
// //   occupation: "teacher",
// // };

// // const car = {
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   color: "blue",
// // };

// // // Objects can contain arrays, arrays can contain objects
// // const student = {
// //   name: "Sarah",
// //   grades: [85, 92, 78], 
// //   address: {
// //     street: "123 Main St",
// //     city: "New York",
// //   },
// // };

// // console.log(student.grades[0]);
// // console.log(student.address.city);

// // // Object Methods
// // const john = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   birthYear: 1995,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function (birthYear) {
// //     return 2025 - birthYear;
// //   },
// // };

// // console.log(john.calcAge(2000));

// // // 'this' keyword
// // const johnImproved = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   birthYear: 1995,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: false,

// //   calcAge: function () {
// //     this.age = 2025 - this.birthYear;
// //     return this.age;
// //   },

// //   getSummary: function () {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${
// //       this.hasDriversLicense ? "a" : "no"
// //     } driver's license.`;
// //  },
// // };

// // console.log(johnImproved.calcAge()); 
// // console.log(johnImproved.age);
// // console.log(johnImproved.getSummary());



// // ////////////////////////////////////
// // // Coding Challenge #3 - User Profile System

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   // Calculate age method
// //   calcAge: function () {
// //     // Calculate age and store as this.age
// //     // Hint: Use new Date().getFullYear() for current year
// //     // Your code here
// //     this.age = new Date().getFullYear() - this.birthYear;
// //     return this.age;
// //   },

// //   // Add friend method
// //   addFriend: function (name, status = "active") {
// //     // Add new friend object to this.friends array
// //     // Return the new length of friends array
// //     // Your code here
// //     this.friends.push({ name, status: status });
// //     return this.friends.length;
// //   },

// //   // Get active friends count
// //   getActiveFriends: function () {
// //     // Filter friends array to count only active friends
// //     // Hint: use this.friends.filter()
// //     // Your code here
// //     return this.friends.filter(friend => friend.status === "active").length;
// //   },

// //   // Toggle active status
// //   toggleStatus: function () {
// //     // Switch this.isActive between true and false
// //     // Return the new status
// //     // Your code here
// //     this.isActive = !this.isActive;
// //     return this.isActive;
// //   },

// //   // Generate profile summary
// //   getSummary: function () {
// //     // Create a social media style profile summary
// //     // Include: name, age, location, status, friend counts, interests
// //     // Use template literals for nice formatting
// //     // Your code here
// //     const age = this.calcAge
// //     const activeFriends = this.getActiveFriends();
// //     const totalFriends = this.friends.length;
// //     const status = this.isActive ? "Active" : "Inactive";

// //     return `${this.firstName} ${this.lastName}, Age: ${age()}, Location: ${this.location}
// //     Status: ${status}
// //     Friends: ${activeFriends} active out of ${totalFriends}
// //     Interests: ${this.interests.join(", ")}`;
  
// //     return 
// //   },
// // };

// // // Test your user profile system
// // console.log(user.getSummary());
// // user.addFriend("Alex", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());



// ///////////////////////////////////////////////////////
// // // //  JavaScript Fundamentals Part 2 - Hour 4

// ////////////////////////////////////
// // // Selecting DOM Elements

// // querySelector - works with any CSS selector
// const message = document.querySelector(".message");
// // gets us the entire element object with all its properties 
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);
// // query selector returns the first matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContext);

// // getElementById
// const buttonById = document.getElementById("btn");
// console.log(buttonById === button);

// // querySelectorAll - multiple elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);



// // Modifying Element Content
const message = document.querySelector(".message");

// text context
console.log(message.textContent);
message.textContent = "Hello, JavaScript!";
console.log(message.textContent);

// innerHtml
message.innerHTML = "<strong>Welcome to the DOM!</strong>";

// innerText
console.log(message.innerText);

// Input Element Values
const input = document.querySelector(".guess");
console.log(input.value);
input.value = "Default text";

const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = "20px";
button.style.borderRadius = "10px";


// // Event Listeners - User Interaction

button.addEventListener("click", function() {
    console.log("Button clicked!");
    message.textContent = "You clicked the button";
    message.style.color = "green";
});

let clickCount = 0;
button.addEventListener("click", function() {
    clickCount++;
    button.textContent = `Clicked ${clickCount} times`;
    button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

// Input events
const display = document.querySelector(".message");
input.addEventListener("input", function() {   
    const userText = input.value;
    display.textContent = `You typed ${userText}`;
    display.style.fontSize = `${userText.length + 10}px`;
});

// keyboard events - respond to specific key
input.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
    if (event.key === "Enter") {
        display.textContent = `You pressed Enter! Text was ${input.value}`;
        input.value = "";
    }   
});



































































































