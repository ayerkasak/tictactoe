// const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers);

// const fruits = ["apple", "banana"];

// const newFruits = [...fruits, "mango"];
// console.log(newFruits)

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, ...second];

// console.log(combined);
const user = {
    name: "Kalpana",
    age: 22
};

const updatedUser = {
    ...user,
    country: "Nepal"
};
console.log(updatedUser)