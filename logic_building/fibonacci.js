let a = -1;
let b = 1;
let series = [];
function fibonacciSeries(a,b){
    for(let i = 1; i <= 5; i++){
        c = a + b;
        series.push(c);
        a = b;
        b = c;
    }
    return series
}

console.log(fibonacciSeries(a, b));