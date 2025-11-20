// const parents = [
//     {name: "Aanad", phone: 465789, email:"aanand.b@gmail.com", children:[
//         {name:"Aanandi", school:"Stepping", class:1},
//         {name:"Andy", school:"Stepping", class:3},
//         {name:"Ann", school:"Stepping", class:4}
      
//     ]},

//      {name: "Khushbu", phone: 46533789, email:"khushbu.b@gmail.com", children:[
//         {name:"Adyant", school:"hope", class:1},
//         {name:"Gyanu", school:"Stepping", class:3},
//         {name:"Nanu", school:"Stepping", class:4}
      
//     ]},

//      {name: "Kasak", phone: 465789, email:"aanand.b@gmail.com", children:[
//         {name:"Avika", school:"Stepping", class:1},
//         {name:"Rudra", school:"Stepping", class:3},
//         {name:"Reet", school:"Stepping", class:4}
      
//     ]}
// ]
// function totalNumberOfChild(){
//     let totalChildren = 0;
//     for(let i = 0; i < parents.length; i++){

//        if (parents[i].children){

//         // totalChildren = totalChildren + parents[i].children.length
//         totalChildren += parents[i].children.length
//        }



        
        
//     }
//     return totalChildren;
// }
// console.log(totalNumberOfChild());

// const totalChildren = parents.reduce((acc, curr) =>{
//     return acc + curr.children.length
    
// },0);
// console.log(totalChildren);


// yeuta function create garne that returns the total number of child inside the array
// yeuta variable define garne having value 0, to use later
//  for loop use garne till the length of array
// for loop bhitra huda check garneki particular elementma children xa ki xaina
// chidrenxa bhane, childrenko array lengthlai particular variable add gardai store garne,
// for loop bahira chahi variable return garxa function bata
// at last print function output 

// Question 1 — Beginner Level - Given an array of numbers, use reduce() to find the sum of all numbers in the array.

// const numbers = [3, 7, 2, 9, 5];
// const sumOfNumbers = numbers.reduce((acc, curr) => {
//     return acc + curr
// }, 0)

// console.log(sumOfNumbers);

// Question 2: Use reduce() to find the maximum number in the array.
// const nums = [12, 5, 40, 22, 9];

// const maxNumber = nums.reduce((acc, curr) => {
//     return acc > curr ? acc : curr;
// });

// console.log(maxNumber);

// Given an array of numbers, use .reduce() to find the product of all numbers.
// const nums = [2, 3, 4];

// const product = nums.reduce((acc, curr) =>{
//     return acc * curr
// }, 1);
// console.log(product);

// Given an array, use .reduce() to count how many even numbers are in the array.

// const arr = [2, 5, 8, 11, 14, 3];
// const totalEvenNumbers = arr.reduce((acc, curr) =>{
//     if(curr % 2 == 0){
//         return acc + 1
//     }
//     return acc
// }, 0);
// console.log(totalEvenNumbers);

// Q3: Convert an array of strings into one long sentence using reduce.
// const words = ["JavaScript", "reduce", "is", "powerful"];

// const sentence = words.reduce((acc, curr) => {
//     return acc + " " +curr;
// });
// console.log(sentence)

// You are given an array of objects representing students and their marks. Using reduce, calculate the total marks of all students.
const students = [
  { name: "Aarav", marks: 85 },
  { name: "Riya", marks: 92 },
  { name: "Karan", marks: 78 },
  { name: "Asha", marks: 88 }
];
const sumOfMarks = students.reduce((acc, curr) => {
    return acc + curr.marks
},0);

console.log(sumOfMarks);