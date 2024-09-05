// console.log("Hello World");

// let a = true;
// let b = true;

// if (a) {
//   console.log("Hello World");
// } else {
//   console.log("False Condition");
// }

// if (b) {
//   console.log("Hello World");
// } else {
//   console.log("False Condition");
// }

// if (a && b) {
//   console.log("And Operator if both conditions are true then thic code will be executed");
// } else {
//   console.log("False Condition");
// }

// if (a || b) {
//   console.log("Or operator executed");
// } else {
//   console.log("Both conditions are false");
  
// }

// let score = 75;

// if (score >= 75) {
//   console.log("A++");
// } else if (score < 75 && score > 70){
//   console.log("A");
// } else if (score < 70 && score > 60){
//    console.log('B');
// } else if (score < 59 && score > 49) {
//   console.log('C');
// } else if (score < 34 && score > 15) {
//   console.log('D')
// } else {
//   console.log('You Failled');
// }

// let arr = ['rahul', 'rohit', 5, true, 'rahul', ['string1, string2, string3']];
// console.log(arr[4]);
// console.log(arr[5]);


// let std = {
//   id: 1,
//   name: 'Kuchh to hai',
//   age: 52,
//   isPass: true
// }

// console.log(std.id);
// console.log(std.name);

// std.age = 31;
// console.log(std.age);
// console.log(std.isPass);

// sum(543, 7644);

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(5, 7);

// const sum = (b, c) => {
//   // console.log('Hello.....w');
//   console.log(b + c);
// }
// sum(7884, 456);

const sum = (a = 7, b = 9) => {
  // console.log('devtushar001');
  return a + b;
}

// console.log(sum(54, 65));
// console.log(sum());
// console.log(sum(8));
// console.log(sum(0));

// loops---

// for of loop

// let arr = [1, 3, 5, 6, 7, 8, 54, 32];

// for (let i of arr) {
//   console.log(i);
//   // it will return values of array
// }

// for in loop

// for (let i in arr) {
//   console.log(i);
//   // console.log(sum(i));
//   // it will return index of array
// }

// const fullName = (a) => {
//   // console.log(a.firstName+ ' ' +a.lastName);
//   return `${a.firstName} ${a.lastName}`;
// }

// let obj = {
//   id: 1,
//   firstName: 'Dev',
//   lastName: 'Tushar',
// }

// fullName(obj);
// console.log(fullName(obj));

// string methods

// let str = "Hello World";
// console.log(str.indexOf("World")); // 6
// console.log(str.indexOf("h")); // -1
// console.log(str.includes("Hello")); // true
// console.log(str.includes("Nube")); // false

let str = "Hello, World!";
// console.log(str.slice(0, 5));

// console.log(str.slice(7));

let newStr = str.replace("World!", "Universe!");
console.log(newStr);
