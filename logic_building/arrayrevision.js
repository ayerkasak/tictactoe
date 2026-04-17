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
const arr = [2,4,6,8];

function sumOfAllElements(){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(sumOfAllElements());