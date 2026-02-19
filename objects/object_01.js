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
let student = {
    name: "Aanand",
    marks: {
        math: 87,
        science: 96,
        english: 50
    }
};

console.log(student.marks.science);

student.marks.math = student.marks.math + 5;
student.marks.computer = 95;

console.log(student);