// Example 1

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback(name);  // calling the callback function
// }

// function sayBye(name) {
//     console.log("Goodbye!" + name);
// }

// greet("Kalpana", sayBye());

// Example 2

// function processUserInput(callback) {
//     let name = "Kalpana";
//     callback(name);
// }

// processUserInput(function(name) {
//     console.log("User name is: " + name);
// });

// Example 3

// function fetchData(callback) {
//     console.log("Fetching data...");
    
//     setTimeout(function() {
//         console.log("Data received");
//         callback();
//     }, 2000);
// }

// fetchData(function() {
//     console.log("Processing data...");
// }); 

// Example 4

// function doTask(callback){
//     console.log("Task is being done.....");
//     callback()
// }

// doTask(function(){
//     console.log("Task Completed!")
// })

// Example 5

// function getData(callback) {
//     setTimeout(function() {
//         console.log("Data fetched");
//         callback();
//     }, 1000);
// }

// function processData(callback) {
//     setTimeout(function() {
//         console.log("Data processed");
//         callback();
//     }, 1000);
// }

// getData(function() {
//     processData(function() {
//         console.log("All work done");
//     });
// });

// 


// Example 6 for reduce method

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(sum);

// Example 7: multiplication using reduce

// const numbers = [2, 3, 4];

// const result = numbers.reduce((acc, curr) => {
//     return acc * curr
// }, 1);

// console.log(result);

// Example 7: find maximum value using 
// EXample 8: Count Occurrence

// const fruits = ["apple", "bannan", "apple", "orange", "banana"];

// const count = fruits.reduce((acc, curr) => {
//     if(acc[curr]){
//         acc[curr] += 1;
//     }else{
//         acc[curr] = 1;
//     }
//     return acc;
// }, {});

// console.log(count);

// Example 9: Convert Array to single string

// const words = ["Hello", "Kasak"];
// const sentence = words.reduce((acc, curr) => {
//     return acc + " " + curr;
// })

// console.log(sentence);

// Example for filter function

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNum = nums.filter((num) => num % 2 == 0 );

// console.log(evenNum);

// const evenNumbers = [];
// function evenNum(nums){
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] % 2 == 0){
//             evenNumbers.push(nums[i])
//         }
//     }
// }

// console.log(evenNumbers);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNums = [];

function checkEven(n){
    if(n % 2 == 0){
        // evenNums.push(n);
        return n
    }
    // return evenNums
}


// const evenNum = nums.filter(checkEven);

// console.log(evenNum);

const myFilter = (callback, arr) => {
    let evenNum = [];
    for(let i = 0; i < arr.length; i++){
        let num = callback(arr[i], i, arr);
        if(num){
            evenNum.push(num)
        }
    }
    return evenNum;
}

console.log(myFilter(checkEven, nums))