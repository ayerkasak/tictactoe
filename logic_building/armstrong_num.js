const armstrongNum = [];

function armstrongNumber(){
    for(let  i = 1; i <= 1000; i++){
    let s = 0;
    let x = i;
    let r;
    while(x !== 0){
        r = x % 10;
        s = s + r * r * r;
        x = parseInt(x / 10);
    }
        if(s === i){
            armstrongNum.push(s)
        }
    }
    return armstrongNum;
}

console.log(armstrongNumber());

// Output: [ 1, 153, 370, 371, 407 ]