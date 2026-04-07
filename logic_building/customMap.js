const nums = [1, 2, 3, 4, 5];

// const newNums = nums.map((n) => n * 2)
// console.log(newNums);

function multiple(n){
    return n * 5
}

// const newNums = nums.map(multiple);

// console.log(newNums);

const myMap = (callback, arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let a = callback(arr[i]);
        newArr.push(a)
    }
    return newArr
}

console.log(myMap(multiple, nums));
