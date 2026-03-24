// Example 1 for logic building
// let text = "hello world";

// let words = text.split(" ");

// console.log(words);

// Example 2
// let sentence = "I love javascript";

// let words = sentence.split(" ");

// console.log(words[1]);


// Example 3

// let fruits = ["apple", "banana", "mango"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// };

// Example 4

// let numbers = [3, 7, 2, 9];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 5){
//         console.log(numbers[i]);
//     }
// }


// Example 5

// let nums = [2,4,6,8];
// let sum = 0;

// for(let i = 0; i < nums.length; i++){
//     sum = sum + nums[i];
// }

// console.log(sum);

// Example 6

// let nums = [5, 2, 8, 1];
// let max = nums[0];

// for(let i = 1; i <nums.length; i++){
//     if(nums[i] > max){
//         max = nums[i]
//     }
// }

// console.log(max)

// Example 7

// let nums = [5,2,8,1]
// let min = nums[0];
// for(let i = 1; i < nums.length; i++){
//     if(nums[i] < min ){
//         min = nums[i]
//     }
// }

// console.log(min);


// Example 8

// let nums = [3, 7, 2, 9, 4];
// let count = 0;

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 4){
//         count++
//     }
// }
// console.log(count);


// Example 9

// let nums = [1,2,3,4];
//  let result = "";

//  for(let i = 0; i < nums.length; i++){
//     result = result + nums[i];
//  }
//  console.log(result);

// Example 10
// let word = "hello";
// let result = "";

// for (let i = 0; i < word.length; i++) {
//     result = word[i] + result;
// }

// console.log(result);


// Example 11
//  function reverseString(str){
//     let reversedWord = "";
//     for(let i = 0; i < str.length; i++){
//         reversedWord = str[i] + reversedWord;
//     }
//     return reversedWord
//  }

//  console.log(reverseString("javascript"));


// Example 12

// function reverseSentence(sentence){
//     let reversedSentence = "";
//     for(let i = 0; i < sentence.length; i++){
//         reversedSentence = sentence[i] + reversedSentence
//     }
//     return reversedSentence
// }
// console.log(reverseSentence("hello world"));


// Example 13

// function reversewords(sentence){
//     let words = sentence.split(" ");

//     let reversedWords = "";
//     for(let i = 0; i < words.length; i++){
//         reversedWords = words[i] + " " + reversedWords;
//     }
//     return reversedWords.trim()
// }

// console.log(reversewords("hello world javascript"));


// // Example 14

// function reverseEachWord(str){
//     let words = str.split(" ");
//     let reversedwords = words.join();
//     let reversedSentence = "";
//     for(let i = 0; i < reversedwords.length; i++){
//         reversedSentence = words[i] + reversedSentence;
//     }
//     return reversedwords;

// };

// console.log(reverseEachWord("hello world javascript"));


// Example 15 fibonacci series:

// function fibonacciSeriesUpto10thTerms(n){
//     let fibonacciList = [0, 1];
    
//     for(let i = 2; i < n; i++){
//         let c = fibonacciList[i-1] + fibonacciList[i-2]
        
        

//         // fibonacciList.push(c)     
//         fibonacciList[fibonacciList.length] = c  
//     }
//     return fibonacciList
     
// }
// console.log(fibonacciSeriesUpto10thTerms(10));


// Example 16 Program to print an unique array

// let fruits = ["apple", "apple", "orange", "orange", "pineapple"];

// let uniqueFruitsList = [];

// for(let i = 0; i < fruits.length; i++){
//     if(!uniqueFruitsList.includes(fruits[i])){
//         uniqueFruitsList.push(fruits[i])
//     }
// }

// console.log(uniqueFruitsList);

// // Example 17 using reduce method 
// let fruits = ["apple", "apple", "orange", "orange", "pineapple"];
// let uniqueFruitsList = fruits.reduce((acc, curr) => {
//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }
//     return acc;

// }, []);

// console.log(uniqueFruitsList);


// Example 18 print an array of unique element
// const arr = [1, 1, 2, 2, 3];
// let newArr = [];

// for(let i = 0; i < arr.length; i++){
//     let count = 0;
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             count += 1;
//         }
//     }

//     if(count === 1){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);
// Output = [3]

// Example 19

// const arr = [5,7,5,9,10,9,11];
// let newArr = [];

// for(let i = 0; i < arr.length; i++){
//     let count = 0;
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             count += 1;
//         }
//     }
//     if(count === 1){
//         newArr.push(arr[i]);
//     }
// };

// console.log(newArr);
// Output: [ 7, 10, 11 ]

// Example 20 pattern 1 --- frequency  counting

// const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7,7,8,8];
//  let freq = {};
//  for(let i = 0; i < arr.length; i++){
//     let num = arr[i];
//     if(freq[num]){
//         freq[num]++;
//     }else{
//         freq[num] = 1;
//     }
//  }

//  console.log(freq);

// output: { '1': 2, '2': 2, '3': 2, '4': 1, '5': 1, '6': 1, '7': 2, '8': 2 }

// const arr = [1,1,2,2,3];
// let freq = {};

// for(let i = 0; i < arr.length; i++){
//     let num = arr[i];

//     if(freq[num]){
//         freq[num]++;
//     }else{
//         freq[num] = 1;
//     }
// }

// console.log(freq);

// Example 21 first non-repeating elements
// const arr = [4, 5, 1, 2, 0, 4, 5, 2];
// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//     let count = 0;
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             count += 1;
//         }
//     }
//     if(count === 1){
//         newArr.push(arr[i]);
//         break;
//     }
// }

// console.log(newArr);
// output: [1]

// Example 22 Problem: Find Elements That Appear Exactly Twice

// const arr = [1,2,3,1,2,1,4,5,4];

// let newArr = [];

// for(let i = 0; i < arr.length; i++){
//     let count = 0;
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             count += 1;
//         }
//     }
//     if(count === 2 && !newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);

// Output: [2,4]


// Example 23: Find elements that appear exactly 3 times

const arr = [1,1,1,2,2,3,3,3,4];
let newArr = [];

for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[i] === arr[j]){
            count += 1;
        }
    }
    if(count === 3 && !newArr.includes(arr[i])){
        newArr.push(arr[i])
    }
}

console.log(newArr);

// Output: [1,3];