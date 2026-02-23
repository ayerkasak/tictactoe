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

// let studentData = localStorage.getItem("students");
// studentData = studentData === null ? [] : JSON.parse(studentData);

// let newStudent = {
//     name:"Sita",
//     marks: 88
// }

// studentData.push(newStudent);

// localStorage.setItem("students", JSON.stringify(studentData));

// for(let s of studentData){
//     console.log(`${s.name} scored ${s.marks}.`)
// }

// Example 5

// let studentData = localStorage.getItem("students");
// studentData = studentData === null ? [] : JSON.parse(studentData);

// let newStudent = {
//     name:"Sita",
//     marks: 88
// }

// studentData.push(newStudent);

// localStorage.setItem("students", JSON.stringify(studentData));

// let newStudentdata = JSON.parse(localStorage.getItem("students"));

// const indexOfElement = newStudentdata.findIndex((student) => student.name === "Sita")



// localStorage.setItem("students", JSON.stringify(newStudentdata));



// for(let s of studentData){
//     console.log(`${s.name} scored ${s.marks}.`)
// }



// Example 6 this is committed as example 5 so committing again

const students = { 
    name:"Kasak", marks: 79,
    name:"Indu", marks: 98,
    name:"Aanand", marks:89,
    name: "Khushbu", marks:99
}


let studentdata = localStorage.getItem("students");
studentdata = studentdata === null ? [] : JSON.parse(studentdata);

studentdata.push(students);

localStorage.setItem("students", JSON.stringify(studentdata));

function studentNames(){
    for(let i = 0; i < studentdata.length; i++){
        console.log(`StudentName: ${studentdata[i].name}`);
    }
}
studentNames();
