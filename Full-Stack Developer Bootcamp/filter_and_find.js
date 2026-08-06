function greaterThan20(arr){
    const greaterNumbers = arr.filter((num) => num > 20);
    return greaterNumbers
}
console.log(greaterThan20([10, 25, 30, 15, 50]))

// function findHari(arr){
//     const name = arr.find((name) => name === "Hari")
//     return name;
// }
// console.log(findHari(["Ram",
//     "Hari",
//     "Sita",
//     "Gita"]))

// const students = [
//     { name: "Ram", marks: 45 },
//     { name: "Hari", marks: 78 },
//     { name: "Sita", marks: 90 },
//     { name: "Gita", marks: 40 }
// ];

// function findPassedStudents(arr){
//     const passedStudents = arr.filter((item) => item.marks >= 50)
//     return passedStudents;
// }
// console.log(findPassedStudents(students))

// const users = [
//     { id: 1, name: "Ram" },
//     { id: 2, name: "Hari" },
//     { id: 3, name: "Sita" }
// ];

// function findUser2(arr){
//     const user = arr.find((item) => item.id === 2);
//     return user;
// }

// console.log(findUser2(users))