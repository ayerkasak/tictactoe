// Example 1
// let person = {
//     name: "Kasak",
//     country: "Nepal",
//     city: "Dhangadhi",
//     age: 29
// }


// console.log(person.name);
// console.log(person["age"]);

// person.name = "Kasak The Pain";
// console.log(person.name)

// delete person.name;
// console.log(person);

// Example 2
// let student = {
//     name: "kasak",
//     roll: 29,
//     grade: 10,
// }

// console.log(student["name"]);
// student.grade = 9;
// student.school = "Kanchanjunga Secondary School";

// console.log(student);

// Example 3
// let car = {
//     brand:"Mahindra",
//     model:"Thar",
//     year:2025
// }

// console.log(car.model);
// car.year = 2026;
// delete car.brand;
// console.log(car);

// Example 4

// let person = {
//     name:"Kasak",
//     age: 29,
//     hobbies: [
//         "Reading Novels",
//         "Travelling",
//         "Cycling",
//         "Playing outdoor games"
//     ]
// };

// console.log(person.hobbies[1]);

// person.hobbies.push("Listening Music");

// person.age = 16;

// console.log(person);

// Example 5
// let student = {
//     name: "Aanand",
//     marks: {
//         math: 87,
//         science: 96,
//         english: 50
//     }
// };

// console.log(student.marks.science);

// student.marks.math = student.marks.math + 5;
// student.marks.computer = 95;

// console.log(student);

// Example 6

// let company = {
//     name: "Techsoft",
//     employees: [
//         {name:"Ram", salary: 30000},
//         {name:"Shyam", salary:35000}
//     ]
// };

// console.log(company.employees[0].salary);
// company.employees[0].salary = company.employees[0].salary + 5000;
// company.employees.push({name: "Hari", salary:40000});

// console.log(company);


// Example 7 
// let company = {
//     name: "Techsoft",
//     employees: [
//         {name:"Ram", salary: 30000},
//         {name:"Shyam", salary:35000},
//         {name: "Hari", salary:40000}
//     ]
// };

// for(let i = 0; i < company.employees.length; i++){
//     employee = company.employees[i];

//     console.log(employee.name + " earns  " + employee.salary);
// }

// Example 8
// let company = {
//     name: "Techsoft",
//     employees: [
//         {name:"Ram", salary: 30000},
//         {name:"Shyam", salary:35000},
//         {name: "Hari", salary:40000}
//     ]
// };


// for(let i = 0; i < company.employees.length; i++){
//     let employee = company.employees[i];
//     employee.salary += 2000;
//     console.log(`${employee.name}'s salary is ${employee.salary}`);
// }

// Example 9

// let company = {
//     name: "Techsoft",
//     employees: [
//         {name:"Ram", salary: 30000},
//         {name:"Shyam", salary:35000},
//         {name: "Hari", salary:40000}
//     ]
// };

// function totalSalary(){
//     salary = 0;
//     for(let i = 0; i < company.employees.length; i++){
//         let employee = company.employees[i];
//         salary += company.employees[i].salary;
//     }
//     return `Total salary = ${salary}`;
// }

// console.log(totalSalary());

// Revision Example 1 Feb-24

// const students =   {name: "Ram", marks: 80};

// let data = localStorage.getItem("students");
// data = data ? JSON.parse(data): [];

// data.push(students)

// localStorage.setItem("students", JSON.stringify(data));

// for(s of data){
//     console.log(`The student's name is ${s.name}`);
//     console.log(`The marks of the student is ${s.marks}`);
// }



// localStorage.clear();

// Revision Example 2 Feb-24

// const students = [
//     {name:"Aanand", marks: 80},
//     {name:"Indu", marks: 95},
//     {name:"Ram", marks: 70}
// ]

// for(let s of students){
//     if(s.marks >= 80){
//         console.log(`${s.name} passed`);
//     }else{
//         console.log(`${s.name} failed`);
//     }
// }

// Revision Example 3 Feb-24

// const students = [
//     {name:"Aanand", marks: 80},
//     {name:"Indu", marks: 95},
//     {name:"Ram", marks: 70}
// ]

// localStorage.setItem("students", JSON.stringify(students));
// console.log("Saved successfully");

let studentData = JSON.parse(localStorage.getItem("students"));

for(let s of studentData){
    if(s.marks >= 80){
        console.log(`${s.name} passed`)
    }else{
        console.log(`${s.name} failed`)
    }
}