// function greaterThan20(arr){
//     const greaterNumbers = arr.filter((num) => num > 20);
//     return greaterNumbers
// }
// console.log(greaterThan20([10, 25, 30, 15, 50]))

function findHari(arr){
    const name = arr.find((name) => name === "Hari")
    return name;
}
console.log(findHari(["Ram",
    "Hari",
    "Sita",
    "Gita"]))