
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

const arr = [4,4,2,2,2,3,3];
let obj = {};
for(let i = 0; i < arr.length; i++){
    let key = arr[i];
    if(obj[key]){
        obj[key]++;
    }else{
        obj[key] = 1;
    }
}

let max = 0;
let result = null;
for(const key in obj){
    if(obj[key] > max){
        max = obj[key];
        result = key;
    }
}

console.log(result);

// Output: 2