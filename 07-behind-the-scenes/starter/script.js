// /////////////////////////////////////////////
// // // // Hour 1 Code - 
// 'use strict';

// // function first () {
// //     second();
// // }

// // function second() {
// //     console.log('In second');
// // }

// // first();

// // function alpha() {
// //     console.log('alpha: start');
// //     beta();
// //     console.log('alpha: end');
// // }

// // function beta() {
// //     console.log('beta');
// // }

// // alpha();


// // const outer = 'global';

// // function demoScope() {
// //     const inner = 'function';
// //     if (true) {
// //         const blockConst = 'block';
// //         var functionVar = 'var-function-scoped';
// //         console.log(outer, inner, functionVar);
// //     }
// //     console.log(outer, inner, functionVar);
// // }

// // demoScope();

// // const name = 'GlobalName';

// // function a() {
// //     const name = 'FunctionName';
// //     function b() {
// //         console.log(name);
// //     }
// //     b();
// // }

// // a();

// // console.log(varX);
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;


//////////////////////////////////////////////////////
// // // Hour 2 Code - 'this' keyword

// 'use strict';

// const person = {
//     name: 'Jonas',
//     greet: function () {
//         console.log(`Hello, I am ${this.name}`);
//     },
// };

// person.greet();


// const anotherPerson = {
//     name: 'Sarah',
// };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();


// const greetFunction = person.greet;
// greetFunction();


// const button = document.querySelector('button');
// button.addEventListener('click', person.greet);

// button.addEventListener('click', () => person.greet());

// button.addEventListener('click', person.greet.bind(person));

// const obj = {
//     regularMethod: function () {
//         console.log('Regular: ', this.name);
//     },

//     arrowMethod: () => {
//         console.log('Arrow: ', this.name);
//     },
// };

// obj.regularMethod();
// obj.arrowMethod();


// const timer = {
//     name: 'Timer',

//     start: function () {
//         console.log(`${this.name} starting...`);
//         const self = this;

//         setTimeout(function () {
//             console.log(`${self.name} finished`);
//         }, 1000);
//     },

//     startModern: function () {
//         console.log(`${self.name} starting modern...`);

//         setTimeout (() => {
//             console.log(`${this.name} finished modern`);
//         }, 1500);
//     }, 
// };

// timer.start();
// timer.startModern();


// const user = {
//     name: 'Alice', 
//     hobbies: ['reading', 'coding', 'gaming'],

//     printHobbiesBad: () => {
//         this.hobbies.forEach(hobby => {
//             console.log(`${this.name} likes ${hobby}`);
//     });
//   },

//     printHobbiesGood() {
//         this.hobbies.forEach(hobby => {
//             console.log(`${this.name} likes ${hobby}`);
//     });
//   },
// };

// user.printHobbiesBad(); 
// user.printHobbiesGood();


// const functionTypes = {
//     regualarFunction: function  () {
//         console.log('Arguments lenght: ', arguments.length);
//         console.log('First argument: ', arguments[0]);
//     },

//     arrowFunction: () => {
//         console.log('Arrow function called');
//     },

//     modernFunction: (...args) => {
//         console.log('Args length: ', args.length);
//         console.log('First arg: ', args[0]);
//     },
// };

// functionTypes.regualarFunction('hello', 'world');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');


////////////////////////////////////////////////
// // // Hour 3 Code - Primitives vs Objects, Copying & Strict Mode
'use strict';

// // Primitive
// let age = 30;

// // we copy primitive, making independent copy
// let oldAge = age;

// age = 31;

// console.log('age: ', age);
// console.log('oldAge: ', oldAge);

// // OBJECT HEAP
// // objects are stored in heap, varibales hold references
// const me = { name: 'Rain', age: 20 };

// const friend = me;

// friend.age = 24;

// console.log('me: ', me);
// console.log('friend: ', friend);


function changeAge(person, newAge) {
    person.age = newAge;
    return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson =  changeAge(originalPerson, 30);

console.log('original: ', originalPerson);
console.log('updated: ', updatedPerson);
console.log('same object?: ', originalPerson === updatedPerson);


const original = {
    name: 'Alice',
    age: 28,
    hobbies: ['reading', 'coding'],
};


// Shallow Copy
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name: ', original.name);
console.log('copy name: ', shallowCopy.name);

shallowCopy.hobbies.push('gaming');
console.log('original hobbies: ', original.hobbies);
console.log('copy hobbies: ', shallowCopy.hobbies);

const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy: ', anotherCopy);


// Deep Copy
const deepOriginal = { 
    name: 'Charlie',
    age: 32,
    address: { city: 'Paris', country: 'France'},
    hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.address.country = 'England';
deepCopy.hobbies.push('cooking');

console.log('original address: ', deepOriginal.address);
console.log('copy address: ', deepCopy.address);
console.log('original hobbies: ', deepOriginal.hobbies);
console.log('copy hobbies: ', deepCopy.hobbies);





