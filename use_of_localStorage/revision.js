let  user = {
    name: "Kasak",
    age: 29
}

localStorage.setItem("user", JSON.stringify(user));

let savedUser = JSON.parse(localStorage.getItem("user"));

console.log(`Name: ${savedUser.name}, Age: ${savedUser.age}`);