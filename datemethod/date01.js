// let today = new Date();
// console.log(today);

// let d = new Date();
// console.log(d.getFullYear())


// let time = Date.now();
// console.log(time);

// calculate time difference

// let start = Date.now();
// for(let i = 0; i < 1000000; i++){}
//     let end = Date.now()

//     console.log(end - start);


// Date.parse() Method
// let t = Date.parse("2026-03-07");
// console.log(t);

// let date = new Date(Date.parse("2024-01-01"));
// console.log(date);

// let today = new Date();

// console.log(today.getDay());
// console.log(today.getMonth())
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());


// Convert Timestamp to date
// let timestamp = Date.now();

// let date = new Date(timestamp);

// console.log(date);

// let today = Date.now();
// console.log(today);

// Converting a Map to an Object
// const map = new Map([
//   ["foo", "bar"],
//   ["baz", 42],
// ]);
// const obj = Object.fromEntries(map);
// console.log(obj); // { foo: "bar", baz: 42 }

// Converting an Array to an Object

// const arr = [
//   ["0", "a"],
//   ["1", "b"],
//   ["2", "c"],
// ];
// const obj = Object.fromEntries(arr);
// console.log(obj); // { 0: "a", 1: "b", 2: "c" }


// Object transformations
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }