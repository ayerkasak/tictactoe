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

function addingBonusMarks(marks){
    const marksWithBonus = marks.map((item) => {
        return item + 5;
    })
    return marksWithBonus;
}

console.log(addingBonusMarks([45, 60, 80, 95]))