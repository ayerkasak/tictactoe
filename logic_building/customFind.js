// const num = [1, 2, 3, 4, 5, 6];
// const numGreaterThan3 = [];
// for(let i = 0; i < num.length; i++){
//     if(num[i] > 3){
//         numGreaterThan3.push(num[i])
//     }
// }

// console.log(numGreaterThan3);

// function findnumGreaterThan3(n){
//     if(n > 3){
//         return n;
//     }
// }

// const numGreaterThan3 = [];

// function findNum(callback){
//     for(let i = 0; i < num.length; i++){
//         let n = callback(num[i]);
//         if(n){
//             numGreaterThan3.push(n);
//         }
//     }
//     return numGreaterThan3;
// }

// console.log(findNum(findnumGreaterThan3));

// const num = [1, 2, 3, 4, 5, 6, 13, 89, 200, 456, 288, 300];
// const newNum = num.find((n) => n > 289);
// console.log(newNum);

const nums = [1, 2, 3, 7, 8, 9, 10];



function checkGreaterNumber(n){
    if(n > 8){
        return n;
    };
};

const myFind = (callback) => {
    for(let i = 0; i < nums.length; i++){
        let number = callback(nums[i]);
        if(number){
            return number
        }
    }
}

console.log(myFind(checkGreaterNumber));

// const myFind = (callback, arr) => {
//   for(let i = 0; i < arr.length; i++){ 
//     let num = callback(arr[i],arr);
//     if(num){
//         return num;
//     }
// }
// }

// console.log(myFind(checkGreaterNumber, nums));