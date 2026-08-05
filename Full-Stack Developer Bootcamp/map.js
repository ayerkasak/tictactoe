// function multipleOfThree(numbers){
//     const newNumbers = numbers.map((n) => n * 3)
//      return newNumbers
// }
// console.log(multipleOfThree([2,4,6,8]))

function uppercase(arr){
    const newArr = arr.map((item) =>{ 
      return  item.toUpperCase()})
    
    return newArr;

}
console.log(uppercase(["ram", "hari", "sita"]))

