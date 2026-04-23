// Question 1: Find two numbers whose sum = 9
const arr = [2, 7, 11, 15];
let sum = []

function sumOfTwoNumbers(){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == 9){
                sum.push(arr[i]);
                sum.push(arr[j]);
            }
        }
    }
    return sum;
}

console.log(sumOfTwoNumbers());