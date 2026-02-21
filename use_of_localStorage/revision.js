// Example 1
// let  user = {
//     name: "Kasak",
//     age: 29
// }

// localStorage.setItem("user", JSON.stringify(user));

// let savedUser = JSON.parse(localStorage.getItem("user"));

// console.log(`Name: ${savedUser.name}, Age: ${savedUser.age}`);

// Example 2
let student = {
    name: "Indu",
    marks: 89
}

localStorage.setItem("student", JSON.stringify(student));

let userStudent = JSON.parse(localStorage.getItem("student"));

console.log(`Student's Name: ${userStudent.name}, ${userStudent.name}'s Marks: ${userStudent.marks}`);