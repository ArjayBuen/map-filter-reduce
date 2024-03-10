// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x){
//     return x*2;
// }
// let doubleNum=numbers.map(double);
// console.log(doubleNum);

let numdoubled=[];
numbers.forEach(function(x){
    numdoubled.push(x*2);
});
console.log(numdoubled);

let doubleNum=numbers.map(function(x){
    return x*2;
});
console.log(doubleNum);

//Filter - Create a new array by keeping the items that return true.
const greaterThanTen=numbers.filter(function(num){
    return num > 10;
});
console.log(greaterThanTen);

const lessThanTen=[];
numbers.forEach(function(num){
    if(num<10){
        lessThanTen.push(num);
    }
});
console.log(lessThanTen);
//Reduce - Accumulate a value by doing something to each item in an array.
let sum=0;
numbers.forEach(function(currentNum){
    sum+=currentNum;
});
console.log(sum)

let total=numbers.reduce(function(accumulator, currentNum){
    console.log("accumulator ="+ accumulator);
    console.log("currentNumber ="+ currentNum);
    return accumulator + currentNum;
});
console.log(total);
//Find - find the first item that matches from an array.

let onlyGreaterThanTen=numbers.find(function (num){
    return num > 10;
});
console.log(onlyGreaterThanTen);
//FindIndex - find the index of the first item that matches.

let indexGreterThanTen=numbers.findIndex(function(num){
    return num>10;
});

console.log(indexGreterThanTen)
