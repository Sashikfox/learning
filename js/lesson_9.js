"use strict";

let arr = [2,8,3,6,75,12,3,5,6];
arr.sort(compare);
console.log(arr);

function compare(a, b) {
    return (a - b);
}

arr.pop();
arr.push(123);
for (let i = 0;i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(i,item,arr) {
    console.log(`элемент ${i} имеет порядковый номер ${item} в массиве ${arr}`);
});  

const answer = prompt('','');
const arraysss = answer.split(', ');
console.log(arraysss.join(' ;'));


