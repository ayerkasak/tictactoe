// Question 1: Find two numbers whose sum = 9
// const arr = [2, 7, 11, 15];
// let sum = []

// function sumOfTwoNumbers(){
//     for(let i = 0 ; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] == 9){
//                 sum.push(arr[i]);
//                 sum.push(arr[j]);
//             }
//         }
//     }
//     return sum;
// }

// console.log(sumOfTwoNumbers());

// Question 2: Return the indeces whose sum is 9
// const arr = [2, 7, 11, 15];


// function sumOFTwo(){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] == 9){
//                 return [i, j];
//             }
//         }
//     }
// }

// console.log(sumOFTwo())

// Question 3 [3,2,4] target = 6

// const nums = [3, 2, 4];

// function targetSix(){
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] == 6){
//                 return [i, j]
//             }
//         }
//     }
// }   

// console.log(targetSix()); 


// Question 3 using Hash Map.

// function twoSum(nums, target) {
//     let map = {}; 

//     for (let i = 0; i < nums.length; i++) {
//         let needed = target - nums[i];

//         if (map[needed] !== undefined) {
//             return [map[needed], i];
//         }

//         map[nums[i]] = i;
//     }
// }
// console.log(twoSum([2,7,11,15], 9));

// To check wherther the given string is palindrome or not.

// function checkPalindrome(str){
//     let reversed = "";
//     for(let i = 0; i < str.length; i++){
//         reversed = str[i] + reversed;
//     }
//     console.log({reversed, str})
//     if(str === reversed){
//         return "The entered string is palindrome"
//     }else{
//         return "It's not palindrome."
//     }
// }

// console.log(checkPalindrome("music"));
// const str = "mom";
// console.log(str.split("").reverse().join("")===str)
// Using two pointer method for checking Palindrome now

// function checkPalindrome(str){
//     let left = 0;
//     let right = str.length - 1;

//     while(left < right){
//         if(str[left] !== str[right]){
//             return false;
//         }

//         left++;
//         right--;
//     }

//     return true;

// }

// console.log(checkPalindrome("dad"));

// function checkPalindrome(str){
//     let left = 0;
//     let right = str.length - 1 

// }


// Example: Find the Largest number in the array

// function largestNumber(arr){
//     let max = 0;
//     for(let i = 0; i < arr.length; i++){
//             if(arr[i] > max){
//                 max = arr[i];
//             }
//     }
//     return max;
// }

// console.log(largestNumber([1,4,5,2,9]))


// Find the Second largest number

// function secondLargestNumber(arr){
//     let max = arr[0];
//     let secondMax = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max ){
//             secondMax = max;
//             max = arr[i];

//         } else if(arr[i] > secondMax && arr[i] !== max){
//             secondMax = arr[i];
//         }
//     }
//     return secondMax;
// }

// console.log(secondLargestNumber([8, 6, 2, 4, 9]));

// Find smallest number in the array.

// function smallestNumber(arr){
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }

// console.log(smallestNumber([10, 12, 3, 5, 6, 7, 1, 9]))


// Count Even and Odd Numbers

function countingEvenAndOddNumbers(arr){
    let even = 0;
    let odd = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            even += 1;
        } else{
            odd += 1;
        }
    }
    return {even, odd}
}

console.log(countingEvenAndOddNumbers([1,2,3,4,5,6,7,8,9,10,11]));