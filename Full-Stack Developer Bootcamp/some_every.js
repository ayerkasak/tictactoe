// const marks = [80, 65, 90, 45];

// const hasFailed = marks.some(mark => mark < 50);

// console.log(hasFailed);

// function checkPasswordLength(arr){
//     const passwordLength = arr.every((pw) => pw.length >= 8)
//     return passwordLength
// }
// console.log(checkPasswordLength(["asdghcvs", "agjhasiuhga", "asgkajsgilag"]))


// function olderPerson(arr){
//     const personOlderOrEighteen = arr.some((age) => age >= 18);
//     return personOlderOrEighteen
// }
// console.log(olderPerson([15, 18, 22, 30, 16]))

function checkingResult(arr){
    const allStudnetsPassed = arr.every((mark) => mark >= 50)
    return allStudnetsPassed
}
console.log(checkingResult([75, 80, 92, 68]))
