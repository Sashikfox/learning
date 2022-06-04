"use strict";

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Say Hello');
    }
};

const jonn = Object.create(soldier);

// const jonn = {
//     health:100
// };

// // jonn.__proto__ = soldier;

// Object.setPrototypeOf(jonn,soldier);

jonn.sayHello();