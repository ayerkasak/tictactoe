const nums = [1, 2, 3, 4, 5, 6];
const total = nums.reduce(sumofNumbers, 0)

function sumofNumbers(acc, crr){
    return acc + crr;
}

const myReduce = (callback, initialValue, arr) => {
    let accvalue = initialValue;
    for(let i = 0; i < arr.length; i++){

       accvalue = callback(accvalue, arr[i])
    //    initialValue = accvalue;
    }
    return accvalue;

}

console.log(myReduce(sumofNumbers, 0, nums))