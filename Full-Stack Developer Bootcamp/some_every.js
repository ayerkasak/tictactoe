// const marks = [80, 65, 90, 45];

// const hasFailed = marks.some(mark => mark < 50);

// console.log(hasFailed);

function checkPasswordLength(arr){
    const passwordLength = arr.every((pw) => pw.length >= 8)
    return passwordLength
}
console.log(checkPasswordLength(["asdghcvs", "agjhasiuhga", "asgkajsgilag"]))

