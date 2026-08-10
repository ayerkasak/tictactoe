// const student = {
//     name: "Ram",
//     age: 20,
//     faculty: "BCA"
// };

// const keys = Object.keys(student);

// console.log(keys);

// const student = {
//     name: "Ram",
//     age: 20,
//     faculty: "BCA"
// };

// const values = Object.values(student);

// console.log(values);

// const student = {
//     name: "Ram",
//     age: 20,
//     faculty: "BCA"
// };

// const entries = Object.entries(student);

// console.log(entries);


// const laptop = {
//     brand: "Dell",
//     model: "Inspiron",
//     price: 75000
// };

// console.log(Object.keys(laptop))
// console.log(Object.values(laptop))
// console.log(Object.entries(laptop))

// const user = {
//     name: "Kalpana",
//     age: 22,
//     country: "Nepal"
// };

// console.log(Object.keys(user).length)

// const student = {
//     name: "Ram",
//     age: 20,
//     faculty: "BCA"
// };

// Object.entries(student).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// const product = {
//     name: "Laptop",
//     price: 75000,
//     brand: "Dell",
//     inStock: true
// };

// Object.entries(product).forEach(([key, value]) => {
//     console.log(`${key} -> ${value}`)
// })

// Object.entries(product).forEach(([key]) => {
//     console.log(`Product property: ${key}`)
// })

// const user = {
//     name: "Ram",
//     age: 20
// };

// const details = {
//     country: "Nepal", 
//     faculty: "BCA"
// };

// Object.assign(user, details);

// console.log(user);         

// const user = {
//     name: "Ram",
//     age: 20
// };

// const updatedUser = {
//     age: 25
// };

// const result = Object.assign({}, user, updatedUser);

// console.log(result);


// const person = {
//     name: "Ram",
//     age: 20
// };

// const contact = {
//     email: "ram@gmail.com",
//     phone: "9800000000"
// };

// const newObj = Object.assign({}, person, contact);
// console.log(newObj)

const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true
};

const userSettings = {
    theme: "dark"
};

const newObj = Object.assign({}, defaultSettings, userSettings)
console.log(newObj);