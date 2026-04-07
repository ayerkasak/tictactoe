const nums = [1, 2, 3, 4, 5];

// const newNums = nums.map((n) => n * 2)
// console.log(newNums);

function multiple(n){
    return n * 3
}

const newNums = nums.map(multiple);

console.log(newNums);

