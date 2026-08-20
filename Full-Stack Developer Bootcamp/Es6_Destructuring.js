// const person = ["Ram", 20, "BCA"];

// const [name, age, faculty] = person;

// console.log(name);
// console.log(age);
// console.log(faculty);

// const colors = ["red", "green", "blue"];

// const [firstColor, secondColor, thirdColor] = colors
// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)

// const numbers = [10, 20, 30];

// const [first, , third] = numbers;

// console.log(first);
// console.log(third);

// const student = ["Kalpana", 22, "BCA"];
// const [name, , faculty] = student;
// console.log(name)
// console.log(faculty)

// const user = {
//     name: "Kalpana",
//     age: 22,
//     country: "Nepal"
// };

// const name = user.name;
// const country = user.country

// console.log(`name = ${name} & country = ${country}`)

// const {name, country} = user
// console.log(name);     // Kalpana
// console.log(country);  // Nepal

// const product = {
//     name: "Laptop",
//     price: 75000,
//     brand: "Dell"
// };

// const {name, price, brand} = product

// console.log(name)
// console.log(price)
// console.log(brand)

// Object Destructuring
// const student = {
//     name: "Kalpana",
//     age: 22
// };

// const {name: studentName} = student
// console.log(studentName);

const product = {
    name: "Laptop",
    price: 75000,
    brand: "Dell"
};

const {name:productName, price:productPrice} = product;

console.log(productName)
console.log(productPrice)