let i;
function checkPrimeNumber(n){
    // let j = 4;

    for( i = 2; i <= n-1; i++){
        // let z = 10;
    //    console.log({i,j})
        if(n % i == 0){
            break;
        }
    }
    console.log({i})
    if(i === n){
        return `${n} is a prime number`;
    }else{
        return `${n} is not a prime number`;
    }
}
console.log(checkPrimeNumber(4));

// function checkPrimeNumber(n){
//     let i;   // declare outside

//     for(i = 2; i <= n - 1; i++){
//         if(n % i == 0){
//             break;
//         }
//     }

//     if(i === n){
//         return `${n} is a prime number`;
//     }else{
//         return `${n} is not a prime number`;
//     }
// }

// console.log(checkPrimeNumber(7));
