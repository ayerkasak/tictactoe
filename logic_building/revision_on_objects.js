
// Example 1: Problem: Count Frequency Using Object

const arr = [1,2,1,3,2,1];
let obj = {};
for(let i = 0; i < arr.length; i++){
    let key = arr[i];
    if(obj[key]){
        obj[key]++;
    } else{
        obj[key] = 1;
    }
}

console.log(obj);

// Output: {1: 3, 2: 2, 3: 1}