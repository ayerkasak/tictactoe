
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNums = [];

function checkEven(n){
    if(n % 2 == 0){
        // evenNums.push(n);
        return n
    }
    // return evenNums
}


// const evenNum = nums.filter(checkEven);

// console.log(evenNum);

const myFilter = (callback, arr) => {
    let evenNum = [];
    for(let i = 0; i < arr.length; i++){
        let num = callback(arr[i], i, arr);
        if(num){
            evenNum.push(num)
        }
    }
    return evenNum;
}

console.log(myFilter(checkEven, nums))