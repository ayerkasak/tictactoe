// Example 1

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();  // calling the callback function
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Kalpana", sayBye);

// Example 2

// function processUserInput(callback) {
//     let name = "Kalpana";
//     callback(name);
// }

// processUserInput(function(name) {
//     console.log("User name is: " + name);
// });

// Example 3

function fetchData(callback) {
    console.log("Fetching data...");
    
    setTimeout(function() {
        console.log("Data received");
        callback();
    }, 2000);
}

fetchData(function() {
    console.log("Processing data...");
}); 