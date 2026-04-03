
// Example 1: Count Frequency Using Object

// const arr = [1,2,1,3,2,1];
// let obj = {};
// for(let i = 0; i < arr.length; i++){
//     let key = arr[i];
//     if(obj[key]){
//         obj[key]++;
//     } else{
//         obj[key] = 1;
//     }
// }

// console.log(obj);

// Output: {1: 3, 2: 2, 3: 1}

// Example 2: Find the element with maximum frequency

// const arr = [1,2,1,3,2,1];
// let obj = {};

// for(let i = 0; i < arr.length; i++){
//     let key = arr[i];
//     if(obj[key]){
//         obj[key]++
//     }else{
//         obj[key] = 1;
//     }
// }

// let max = 0;
// let result = null;
// for(const key in obj){
//     if(obj[key] > max){
//         max = obj[key];
//         result = key
//     }
// }

// console.log(result);
// Output: 1

// Example 3: Find the element with maximum frequency

// const arr = [4,4,2,2,2,3,3];
// let obj = {};
// for(let i = 0; i < arr.length; i++){
//     let key = arr[i];
//     if(obj[key]){
//         obj[key]++;
//     }else{
//         obj[key] = 1;
//     }
// }

// let max = 0;
// let result = null;
// for(const key in obj){
//     if(obj[key] > max){
//         max = obj[key];
//         result = key;
//     }
// }

// console.log(result);

// Output: 2

// Example 4: Find the element with maximum frequency

// const arr = [4,4,2,2,2,3,3];
// let obj = {};

// for(let i = 0; i < arr.length; i++){
//     let key = arr[i];
//     if(obj[key]){
//         obj[key]++;
//     }else{
//         obj[key] = 1;
//     }
// }

// let max = 0;
// let max2nd = 0;
// let maxkey = null;
// let secondkey = null;

// for(const key in obj){
//     if(obj[key] > max){
//         max2nd = max;
//         secondkey = maxkey;

//         max = obj[key];
//         maxkey = key;
//     }else if(obj[key] > max2nd && obj[key] < max){
//         max2nd = obj[key];
//         secondkey = key;

//     }
// }

// console.log(Number(secondkey));

// Output: 3

// Example: 5: First Repeating Element

// const arr = [5, 3, 4, 3, 5, 6]; 

// const arr = [5, 3, 4, 3, 5, 6];
// for(let i = 0; i < arr.length; i++){
//     for(let j = i +1; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             console.log(arr[i])
//             break
//         }
//     }
// }

// Recusrsuin function:


// function factorial(n){
//     if(n > 0){
//         return n*factorial(n-1)
//     }else{
//         return 1
//     }
// }

// console.log("factorial of 5 is " + factorial(5))


// Printing fibonacci series 6th term using recursion function

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// Example: get 6th Fibonacci number
// console.log(fibonacci(6)); // 8


// Progarm to find Greatest Common Divisor using Recursion function

// function GCD(a, b){
//   if(a == b){
//     return a;
//   } else if(a % b == 0){
//     return b;
//   } else if(b % a == 0){
//     return a;
//   } else if(a > b){
//     return GCD(a%b, b);
//   } else{
//     return GCD(a, b % a)
//   }
// }


// console.log(GCD(105, 91));

// Problem: First Non-Repeating Element (Using Object)

const arr = [4, 5, 1, 2, 0, 4, 5, 2];
let obj = {};
 for(let i = 0; i < arr.length; i++){
  let num = arr[i];
  if(obj[num]){
    obj[num] += 1;
  }else{
    obj[num] = 1;
  }
 }


 for(let i = 0; i < arr.length; i++){
  if(obj[arr[i]] === 1){
    console.log(arr[i]);
    break;
  }
 }