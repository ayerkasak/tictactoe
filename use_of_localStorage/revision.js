// Example 1
// let  user = {
//     name: "Kasak",
//     age: 29
// }

// localStorage.setItem("user", JSON.stringify(user));

// let savedUser = JSON.parse(localStorage.getItem("user"));

// console.log(`Name: ${savedUser.name}, Age: ${savedUser.age}`);

// Example 2
// let student = {
//     name: "Indu",
//     marks: 89
// }

// localStorage.setItem("student", JSON.stringify(student));

// let userStudent = JSON.parse(localStorage.getItem("student"));

// console.log(`Student's Name: ${userStudent.name}, ${userStudent.name}'s Marks: ${userStudent.marks}`);

// Example 3
// let students = localStorage.getItem("students");
// students = students === null ? [] : JSON.parse(students);


// let newStudent = {
//     name: "Hari",
//     marks: 90
// };

// students.push(newStudent);

// localStorage.setItem("stuents", JSON.stringify(students));

// for(let student of students){
//     console.log(`${student.name} scored ${student.marks}`);
// }

// Example 4

let studentData = localStorage.getItem("students");
studentData = studentData === null ? [] : JSON.parse(studentData);

let newStudent = {
    name:"Sita",
    marks: 88
}

studentData.push(newStudent);

localStorage.setItem("students", JSON.stringify(studentData));

for(let s of studentData){
    console.log(`${s.name} scored ${s.marks}.`)
}