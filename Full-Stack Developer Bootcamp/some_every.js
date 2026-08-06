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

// function checkingResult(arr){
//     const allStudnetsPassed = arr.every((mark) => mark >= 50)
//     return allStudnetsPassed
// }
// console.log(checkingResult([75, 80, 92, 68]))

// const cart = [
//     { name: "Laptop", quantity: 1 },
//     { name: "Mouse", quantity: 2 },
//     { name: "Keyboard", quantity: 0 }
// ];

// function checkProductQuantityMoreThanZero(arr){
//     const productQuantity = arr.every((item) => item.productQuantity > 0)
//     return productQuantity
// }
// console.log(checkProductQuantityMoreThanZero(cart));


// const users = [
//     { name: "Ram", isAdmin: false },
//     { name: "Hari", isAdmin: false },
//     { name: "Sita", isAdmin: true }
// ];

// function checkAdmin(arr){
//     const availableAdmin = arr.some((item) => item.isAdmin === true)
//     return availableAdmin
// }
// console.log(checkAdmin(users));

const emails = [
    "ram@gmail.com",
    "",
    "hari@gmail.com",
    "sita@gmail.com"
];

function checkFilledEmails(arr){
    const emailsAvailable = arr.every((item) => item !== "")
    return emailsAvailable
}
console.log(checkFilledEmails(emails));

function checkEmptyEmail(arr){
    const emptyEmail = arr.some((item) => item === "")
    return emptyEmail
}
console.log(checkEmptyEmail(emails));