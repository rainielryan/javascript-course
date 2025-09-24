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


const functionTypes = {
    regualarFunction: function  () {
        console.log('Arguments lenght: ', arguments.length);
        console.log('First argument: ', arguments[0]);
    },

    arrowFunction: () => {
        console.log('Arrow function called');
    },

    modernFunction: (...args) => {
        console.log('Args length: ', args.length);
        console.log('First arg: ', args[0]);
    },
};

functionTypes.regualarFunction('hello', 'world');
// functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');










