// Revision 1: Find the largest number in the array.
// const arr = [4, 9, 2, 7, 1];

// function findingLargestNumber(){
//     let max = 0;
//     for(let i = 0; i < arr.length; i++){
//        if(i > max){
//         max = arr[i];
//        }
//     }
//     return max
// }

// console.log(findingLargestNumber());


// Revision 2: Find sum of all elements
// const arr = [2,4,6,8];

// function sumOfAllElements(){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumOfAllElements());


// Revision 3: Return all even numbers.

// const arr = [1,2,3,4,5,6];

// const evenNumbers = [];

// function findingEvenNumbers(){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             evenNumbers.push(arr[i])
//         }
//     }
//     return evenNumbers
// }

// console.log(findingEvenNumbers());

// Revision 4: Find the first repeating element

// const arr = [1,2,3,2,4,5,6];
// let obj = {};
// function findFirstRepeatingElement(){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//             return arr[i]
//             }
//         }
//     }
//     return "No repeating element";
// }
// console.log(findFirstRepeatingElement());

// Revision 5: Find all elements appearing exactly once

const arr = [1,2,1,3,4,2,5];
let newArr = [];

function elementsAppearingOnlyOnce(){
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
             if(arr[i] == arr[j]){
                count ++
            }          
        }
        if(count == 1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(elementsAppearingOnlyOnce());