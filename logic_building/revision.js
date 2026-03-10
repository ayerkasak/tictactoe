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

function reversewords(sentence){
    let words = sentence.split(" ");

    let reversedWords = "";
    for(let i = 0; i < words.length; i++){
        reversedWords = words[i] + " " + reversedWords;
    }
    return reversedWords
}

console.log(reversewords("hello world javascript"));