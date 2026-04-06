const num = [1, 2, 3, 4, 5, 6];
// const numGreaterThan3 = [];
// for(let i = 0; i < num.length; i++){
//     if(num[i] > 3){
//         numGreaterThan3.push(num[i])
//     }
// }

// console.log(numGreaterThan3);

function findnumGreaterThan3(n){
    if(n > 3){
        return n;
    }
}

const numGreaterThan3 = [];

function findNum(callback){
    for(let i = 0; i < num.length; i++){
        let n = callback(num[i]);
        if(n){
            numGreaterThan3.push(n);
        }
    }
    return numGreaterThan3;
}

console.log(findNum(findnumGreaterThan3));