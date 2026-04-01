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

// function fetchData(callback) {
//     console.log("Fetching data...");
    
//     setTimeout(function() {
//         console.log("Data received");
//         callback();
//     }, 2000);
// }

// fetchData(function() {
//     console.log("Processing data...");
// }); 

// Example 4

// function doTask(callback){
//     console.log("Task is being done.....");
//     callback()
// }

// doTask(function(){
//     console.log("Task Completed!")
// })

// Example 5

function getData(callback) {
    setTimeout(function() {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(function() {
        console.log("Data processed");
        callback();
    }, 1000);
}

getData(function() {
    processData(function() {
        console.log("All work done");
    });
});