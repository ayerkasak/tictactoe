function greaterThan20(arr){
    const greaterNumbers = arr.filter((num) => num > 20);
    return greaterNumbers
}
console.log(greaterThan20([10, 25, 30, 15, 50]))