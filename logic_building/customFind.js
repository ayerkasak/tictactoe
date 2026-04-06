const num = [1, 2, 3, 4, 5, 6];
const numGreaterThan3 = [];
for(let i = 0; i < num.length; i++){
    if(num[i] > 3){
        numGreaterThan3.push(num[i])
    }
}

console.log(numGreaterThan3);