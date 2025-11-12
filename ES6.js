// let personinArray = ["Kasak", 28, false]

// let person ={
//     name: "Kasak",
//     age: 28,
//     isMarried: false,
//     gender: "FEMALE",
//     school: {
//         name: "Stepping",
//         class: 10,

//     },
// }

// //spread/rest oprator => ... , used in array and object

// function sumOfEvenNumbers(numbers){
//     let sum = 0;
//     for( let i = 1;  i<= numbers.length - 1; i++){
//         if (numbers[i] % 2 == 0){
//             sum = sum + i;
//         }                   
//     }
//     return sum
// }

// function sumOfNNaturalNumbers(){
//     let N = Number (prompt("Enter a number:"));
//     let sum = 0;
//     for (let i = 1; i<=N; i++){
//         sum = sum + i;
//     }
//     return sum
// }

// let numbers = [1,2,3,4]

// function calculateSum(firstNum, secondNum, ...nums){
//     console.log({
//         firstNum, secondNum, nums
//     })
//     console.log(firstNum, secondNum, nums);
//     console.log("Firstnum:" + firstNum, "secondNum:" + secondNum, "nums:" + nums);
//     let sum = 0;
//     for(let i = 0; i <= nums.length - 1; i++){
//         sum = sum + nums[i]
    
//     }
//     return sum
    
// }

// // console.log(calculateSum(numbers));
// console.log(calculateSum(1,2,3,4));
    

// //rest in object
// var students ={
//     name: "Kasak",
//     age: 28,
//     hobbies: ["reading", "watching movies", "listening music"]
// }
// // const age = students.age
// // const {age} = students;
// // const {age, ...rest} = students;
// const{...rest} = students;
// console.log(rest)


// // spread in object
// var newStudent = {
//     ...students,
//     age: 29
// }
// console.log(newStudent)

// // rest in array
// function addNumbers(a,b,c, ...others){
//     console.log(others)
//     return a+b+c
    
// }
// const res = addNumbers(2,3,4,5,6,7,8,9,90)
// console.log(res)

// // spread in array
// var names = ["Kasak", "Indu", "Piku", "Gitu"];
// function getName(name1,name2,name3){
//     console.log(name1, name2, name3)
// }
// getName(...names)

// // Question 1
// function sumNumbers(a,b,c){
//     return a + b + c
// }

// const numb = [2,3,4,5,6,7,];
// console.log(...numb)
// console.log(sumNumbers(...numb))
// answer by chatgpt for CountQueuingStrategy. 1
// function sumNumbers(...numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num;
//   }
//   return sum;
// }

// const numb = [2, 3, 4, 5, 6, 7];
// console.log(sumNumbers(...numb)); // Output: 27
// question no. 2
// let obj = {
//     firstName: "Kasak",
//     lastName: "Air",
//     hobbies : ["reading", "coding", "music"]
// }
// console.log(`Hello, my name is ${obj.firstName} ${obj.lastName}`)
// console.log(`My hobbies are ${obj.hobbies.join("\n")}`)

// function introduce(firstName, lastName, ...hobbies){

//     console.log(`Hello, my name is ${firstName} ${lastName}`)
//     console.log(`My hobbies are ${hobbies.join(", ")}`)
    


// }
// introduce("Kalpana", "Air", "reading", "coding", "music");


// const fruits = ["apple", "banana", "orange"];

// function findMax(...numbers){
//     console.log(Math.max(...numbers))
// }
// findMax(1,5,7,2,9)

// const num = [1, 2, 3];
// const num2 = [4, 5, 6];

// function mergeAndDouble(a, b, ...c){//rest oprator
//     let num3 = [...a, ...b]// spread operator    // console.log(num3)
//     console.log(...c)//[[1], [2,4]]
    // let doubleNum = []
    // for (let i = 0; i <= num3.length -1 ; i++){
    //     let num4 = num3[i] * 2;
    //     doubleNum.push(num4)

    // }

    // num3.forEach(function(value, ...rest){
    //     console.log({value, rest})
    //     let num4 = value * 2;    
    //     doubleNum.push(num4)
    // })

    
//     let doubleNum = num3.map(function(value, ...rest){
//         console.log({value, rest})
//         let num4 = value * 2;
//         return num4
//     })
//     return doubleNum
// }
// console.log(mergeAndDouble(num, num2, true))

// let fruits = ["apple", "banana", "mango"]
// function arrFruits() {
//     fruits.push("orange");
//     fruits.pop();
// }
// arrFruits();

// console.log(fruits);


// let colors = ["red", "green", "blue"];
// function arrColors(){
//     colors.unshift("yellow")
//     // colors.shift()

// }
// arrColors();

// console.log(colors)

// let newNumbers = [1,2,3,4]

// function double(n){
//     return n * 2
// }
// let newArr = newNumbers.map(double);
// // console.log(newArr)

// let numbs = [1, 2, 3, 4, 5, 6, 7, 8]
// let even = numbs.filter((n) => {
//    const isEven = n % 2 == 0
//    if(isEven) {
//     console.log(n)
//    }
//    return isEven
// });
// console.log(even)

// let sum = numbs.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(sum)
// console.log({beforSclice: numbs})

// let newNumb = numbs.slice(2,5)
// console.log({afterSclice: numbs, newNumb})

// console.log(newNumb) //output: [3, 4, 5]

// let newNumber = numbs.splice(1,4)

// let a = [2, 4, 6, 8]
// let sum = a.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(sum)

// let pro = a.reduce((acc, curr) => {
//     return acc * curr
// }, 1)
// console.log(`The product is ${pro}`);

// // let colors = ["black", "white", "olive green"];
// // colors.forEach((val, index) => {
// //     console.log(index + ":" + val);
// // });

// let b = [2, 3, 4, 5]
// let sqr = b.map(n => n * n)
//     console.log(sqr);

// //function and its types
// //function with name
// function sayHello(name) {
//     return "Hello " + name 
// }



// //ananomous function 
// function (name) {
//     return "Hello " + name 
// }
// //we can't call it but it can be passed as arguments on some other function

// //arrow function and its ways of writing on different conditions
// const sayBye = (name) => {
//     return "Bye! " + name;
// }

// //ananomous arrow function
// (name) => {
//     return "Bye! " + name;
// }
// //but when we have single line of code inside the function block and if that is return statement we can do:
// const _sayBye = (name) => "Bye! " + name  

// const _sayByeConsole = (name) => "Bye! " + name

// const sayByeConsole = (name) => {
//     let con = console.log("Bye! " + name)
//     return "Bye! " + name
// }  


// let b = [2, 3, 4, 5]
// let sqr = b.map(function (num) {
//     return num * num 
// })
// console.log(sqr);


// function square(num) {
//     return num * num
// }
// let _sqr = b.map(square)
// console.log(_sqr);

// myMap(a) {
//     let name = "kasak"
//     a(name)
// }
// myMap(square)
// myMap(function (name){
//     console.log("helloworld", name)
// })
// myMap((name) => {
//     console.log("helloworld", name)
// })
// myMap(name => console.log("helloworld", name)
// )

// myMap((_name) => {
//     console.log(_name)
// })

// const newArr = name_ => console.log(name_)
// myMap(newArr)

// Q1. Basic function call

// Write a function outer() that defines another function inner().
// When you call outer(), it should call inner() and print "Hello from inner function!".

// function outer(){
//     function inner() {
//         console.log("Hello from inner function!")
//     }
//     inner()
// }

// outer()

// Q2. Passing argument to inner function

// Create a function greet(name) that defines another function sayHi() inside it.
// The sayHi() function should print:
// 👉 "Hi, " + name.

// function greet(name){
//     function sayHi(){
//         return "Hi, " + name
//     }
//     return sayHi()
// }
// console.log(greet("Kasak"));

// Q3. Returning value from inner function
// Write a function outer(num) that defines an inner function square(x) which returns x * x.
// outer() should call square(num) and return its result.

// function outerFunc(num){
//     function square(x){
//         return x * x
//     }
//     return square(3);

// }
// const newSqr = outerFunc()
// console.log(newSqr)

// Q4. Inner function accessing outer variable (closure)
// Make a function outer() that defines a variable count = 5 and an inner function showCount() which prints count.
// Call showCount() inside outer().

// function newOuter(){
//     let count = 5;
//     function showCount(){
//         console.log(count);
//     }
//     showCount();
// }
// newOuter();

// Q5. Passing function as a parameter
// Write a function operate(a, b, fn) that takes a function fn as an argument and uses it to combine the two numbers.
// function operate(a,b){
//     return a + b
// }
// function newOperate(func, val, val1){
//     console.log(func(val, val1));
// }

// newOperate(operate, 2, 3)

// Q6. Returning a function
// Write a function multiplyBy(factor) that returns another function which multiplies any given number by factor.
 
// function multiplyBy(factor){
//     return function(number){
//         return factor * number
//     };
// }

// const double = multiplyBy(2);
// const triple = multiplyBy(3);

// console.log(double(5));
// console.log(triple(5));

// Q7. Nested function chain
// Write a function outer() that defines a function middle(), which defines another function inner().
// When outer() is called, all three functions should print messages in order.
// function nOuter(){
//     console.log("Hello from Outer.");
//     function middle(){
//         console.log("Hello from middle.");
//         function newInner(){
//             console.log("Hello from Inner.");
//         }
//         newInner();

//         }
//     middle();
//     }
// nOuter();
    
// Q8. Outer and inner both take arguments
// Write a function mathOperation(a, b) that defines an inner function add(x, y) that returns their sum.
// mathOperation() should return the result of add(a, b).

// function mathOperation(a, b){
//     function add(x, y){
//         return x + y
//     }
//     return add(a, b)
// }

// const newSum = mathOperation(2,3);
// console.log(newSum)

// // about spread and rest operator
// function sumNew(...numbers) {

//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sumNew(1, 2, 3)); 


// const [first, second, ...rest] = [10, 20, 30, 40, 50];
// console.log(first, second); 
// console.log(rest); 


// const obj = { a: 1, b: 2, c: 3 };
// const { a, ...others } = obj;
// console.log(a);      
// console.log(others); 

// const app = ('gyanchand');
// console.log(app)


// // Example: rest in function
// function joinWith(separator, ...words) {
//   return words.join(separator);
// }
// console.log(joinWith("*", "a", "b", "c")); // "a-b-c"


// Write a function called calculateAverage() that takes this array as an argument and returns the average of the numbers.

// const numbers = [5, 10, 15, 20, 25];

// function calculateAverage(arr){
//     let totalSum = numbers.reduce((a, b) =>  a + b, 0);
//     return totalSum / arr.length
// }
// console.log(calculateAverage(numbers))

// Write a function called getTopStudents() that:
// Takes the array of students as an argument.
// Filters out all students who scored below 80 marks.
// Returns a new array containing only the names of those top students.
// Bonus challenge:
// Use arrow functions and array methods (filter() + map()).

// const students = [
//   { name: "Aarav", marks: 85 },
//   { name: "Priya", marks: 92 },
//   { name: "Rahul", marks: 76 },
//   { name: "Sneha", marks: 64 },
//   { name: "Kabir", marks: 88 }
// ];


// fetch the marks 
// const marks = students.map(student => student.marks)
// // sort the marks
// const sortedMarks = marks.sort()
// // secondlast index ko marks liney ani kunai variablema store garne 
// const secondLargestMark = sortedMarks[(sortedMarks.length - 1) - 1]
// // finding the element of the array having the marks = having second largest number stored on the variable
// const secondStudent = students.find(student => student.marks == secondLargestMark)
// // print the variable.name
// console.log(secondStudent.name)



// CRUD operation on object
// let product = {
//   name: "Laptop",
//   price: 80000,
//   brand: "Dell"
// };

// product.stock = 50;
// console.log(product.brand);
// product["price"] = 75000;
// console.log(product["price"])
// delete product.stock
// console.log(product);

// Tasks:
// Create:
// Add a new property called grade with the value "A" inside the main object.
// Read:
// Print the city name from the nested address object.
// Update:
// Change the country from "Nepal" to "India".
// Also, add "Computer" as a new subject to the subjects array.
// Delete:
// Remove the property age from the student object.


// let student = {
//   name: "Riya Sharma",
//   age: 21,
//   address: {
//     city: "Kathmandu",
//     country: "Nepal"
//   },
//   subjects: ["Math", "Science", "English"]
// };

// student.grade = "A";
// console.log(student.address.city);
// student.address.country = "India";
// student.subjects.push("Computer");
// delete student.age
// console.log(student)


// // Task:
// You must create four functions to perform CRUD operations on this inventory.
// Create: Add a new item to the inventory (with id, name, and price).
// Read: Display all items currently in the inventory.
// Update: Update the price of an item using its id.
// Delete: Remove an item from the inventory using its id.
// Use .push() to add a new object to the array.
// Use .forEach() or .find() to search for an item by id.
// Use .filter() to delete items.
// Use console.log() inside your functions to show updates.

// let inventory = {
//   items: [
//     { id: 1, name: "Laptop", price: 900 },
//     { id: 2, name: "Phone", price: 600 },
//     { id: 3, name: "Tablet", price: 400 }
//   ]
// };
// function createInventory( id, name, price){
// inventory.items.push({id: id, name: name, price: price})
// return {inventory, message: "Item added successfully"}
// }
// console.log(createInventory(4, "Iphone", 1000))

// function readInventory(){
//   return inventory
// }
    
// console.log(readInventory())

// const updateInventory = (id, price) => {
//   const itemIndex = inventory.items.findIndex(item => item.id == id)
//   inventory.items[itemIndex].price = price
// return {inventory, message: "Item updated successfully"}
// }

// console.log(updateInventory(2, 450))

// const deleteInventory = (id) => {
//  const updatedInventory = inventory.items.filter(i => i.id !== id)
//  inventory.items = updatedInventory
// return {inventory, message: "Item deleted successfully"}
// }
// console.log(deleteInventory(2));

// Question 4:
// You have an array of users. Each user has id, name, and skills (array).
// Write functions to:
// Add a new skill to a specific user by id.
// Remove a skill from a specific user by id.
// Return all users who have a particular skill (e.g., "JavaScript").

// let users = [
//   { id: 1, name: "Riya", skills: ["HTML", "CSS"] },
//   { id: 2, name: "Aarav", skills: ["JavaScript", "React"] },
//   { id: 3, name: "Neha", skills: ["Python", "Django"] }
// ];

// const newSkill = (id, skill) => {
//   const selectId = users.findIndex(item => item.id == id)
//   if (users[selectId] !== undefined ){
//   users[selectId].skills.push(skill)
//   return {users, message: "Skill added successfully"}
//   } else{
//     return {message: "User not found!"}
//   }
// }

// console.log(newSkill(2, "C++"));

// const removeSkill = (id, skill) => {
//    const selectId = users.findIndex(item => item.id == id)
//   if (users[selectId] !== undefined ){
//   const filteredSkill = users[selectId].skills.filter(s => s !== skill)
//     users[selectId]["skills"] = filteredSkill
//   return {users, message: "Skill removed successfully"}
//   } else{
//     return {message: "User not found!"}
//   }
// }

// const returnAllUsers = (skill) => {
//   const selectUser = users.filter(user => user.skills.includes(skill))
//   console.log(selectUser)
// }
// returnAllUsers("JavaScript")



// let users = [
//   { id: 1, name: "Aarav", age: 25, skills: ["JavaScript", "React"] },
//   { id: 2, name: "Riya", age: 22, skills: ["Python", "Django"] },
//   { id: 3, name: "Neha", age: 27, skills: ["HTML", "CSS", "JS"] }
// ];


// function newUser(id, name, age, skills){
//   users.push({id: id, name: name, age: age, skills: skills})
// }
// newUser(4, "kasak", 28, ["Node.js", "React", "JavaScript"])

// function readusers(){
//   return users
// }
// console.log(readusers())

// const updateUserName = (id, newName) => {
//   const selectId = users.find(user => user.id === id);
//   if (selectId){
//     selectId.name = newName;
//     return `User's name update successfully to ${newName}`
//   } else {
//     return "User not found!"
//   }
   
    
// }
// console.log(updateUserName(1, "Aarav Ayer"))


// const deleteUser = (id) => {
//   const selectId = users.filter(user => user.id !== id);
//   users = selectId;
//   return users;
// }
// console.log(deleteUser(1));


// Question 5 — Filter and Update Together
// You are given the same users array.
// Your task is to:
// Find all users who have "JavaScript" in their skills.
// Add "TypeScript" to their skills list only if it doesn’t already exist.
// Print the updated array.


// let users = [
//   { id: 1, name: "Aarav", age: 25, skills: ["JavaScript", "React"] },
//   { id: 2, name: "Riya", age: 22, skills: ["Python", "Django"] },
//   { id: 3, name: "Neha", age: 27, skills: ["HTML", "CSS", "JS"] }
// ];

// const updateSkill = (skill, newSkill) => {
//   const skilledUsers = users.filter(user => user.skills.includes(skill));

//   skilledUsers.forEach(user => {
//     if (!user.skills.includes(ski
// ll)){
//       user.skills.push(newSkill)
//         console.log(`${newSkill} added for ${user.name}`);
//     }
//   })
//   return users;
// };
// console.log(updateSkill("JavaScript", "TypeScript"))


// Increase salary for specific department
// Finds all employees in the given department (for example, "IT").
// Increases their salary by the given percentage (e.g., 10%).
// Returns the updated employees array.
// Prints a message for each updated employee (e.g., "Aarav's new salary is 55000").

// let employees = [
//   { id: 1, name: "Aarav", department: "IT", salary: 50000 },
//   { id: 2, name: "Riya", department: "HR", salary: 40000 },
//   { id: 3, name: "Neha", department: "IT", salary: 55000 },
//   { id: 4, name: "Karan", department: "Finance", salary: 45000 }
// ];

// function increaseSalary(department, percentage){
//   const selectedEmployees = employees.filter(employee => employee.department == department);
//   const employeesWithIncreasedSalary = selectedEmployees.map(employee => {
//     return {
//       id: employee.id,
//       name: employee.name,
//       department: employee.department,
//       salary:  employee.salary + (employee.salary * (percentage / 100))
//     }
//     })
//     const removeEmployee = employees.filter(employee => employee.department !== department)
//     // const newEmployees = [...employeesWithIncreasedSalary, ...removeEmployee]
//     // employees = newEmployees;
//     employees = [...employeesWithIncreasedSalary, ...removeEmployee]

//    return employees
//   }
// console.log(increaseSalary("IT", 10));

// Department Salary Update with Bonus System
// Create a function named giveBonus(department, bonusAmount) which will:
// Find all employees who belong to the given department.
// Add a new property to each of them named "bonus" and set its value to bonusAmount.
// Also, update their salary by adding that bonus to it.
// Finally, return the updated employees array.

let employees = [
  { id: 1, name: "Aarav", department: "IT", salary: 50000, skills: ["JavaScript", "React"], },
  { id: 2, name: "Riya", department: "HR", salary: 40000, skills: ["Recruitment", "Communication"] },
  { id: 3, name: "Neha", department: "IT", salary: 55000, skills: ["HTML", "CSS", "Node.js"] },
  { id: 4, name: "Karan", department: "Finance", salary: 45000, skills: ["Excel", "Accounting"] }
];

// function giveBonus(department, bonusAmount) {
//   let givenDepartmentEmployees = employees.filter(e => e.department == department)
//   let bonusAdded = givenDepartmentEmployees.map(e => {
//     return {
//       ...e,
//       salary: e.salary + bonusAmount ,
//       bonus: bonusAmount
//     }
//   })

//   let otherDepartEmployees = employees.filter(e => e.department != department)
//   employees = [...otherDepartEmployees, ...bonusAdded]
//   return employees

// }



const giveBonus = (department, bonusAmount) => {
  const updatedEmployeeNames = employees.map(employee => {
    if (employee.department === department){
      return {
        ...employee,
        bonus: bonusAmount,
        salary: employee.salary + bonusAmount
      };
    }else{
      return {...employee, bonus: 0};
    }
    });
    // employees = updatedEmployeeNames
 return updatedEmployeeNames
}
console.log(giveBonus("IT", 6790));
