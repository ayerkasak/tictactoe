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

const nums = [3, 2, 4];

function targetSix(){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == 6){
                return [i, j]
            }
        }
    }
}

console.log(targetSix());