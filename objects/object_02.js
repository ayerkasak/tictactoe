// // localStorage.clear();
// const nameInput = document.getElementById("nameInput");
// const btn = document.getElementById("addBtn");
// const output = document.getElementById("output");

// const { createElement } = require("react");

// let data = localStorage.getItem("name");
// data = data ? JSON.parse(data) : [];

// btn.addEventListener('click', function(){
//     const name = nameInput.value;

//     data.push(name);
    
//     localStorage.setItem("name", JSON.stringify(data));
    
//     showData();

//     nameInput.value = "";
    
// });

// function showData(){
//     output.innerHTML = "";
//     let data = JSON.parse(localStorage.getItem("name"));
    
//     for(let s of data){
//         const div = document.createElement("div");
//         div.textContent = `The name is ${s}`

//         output.appendChild(div);}

// }

//     showData();


// const city = document.getElementById("cityName");
// const btn = document.getElementById("addBtn");
// const output = document.getElementById("output");

// let data = localStorage.getItem("city");
// data = data ? JSON.parse(data) : [];

// function render(){
//     output.innerHTML = "";
//     let cityName = JSON.parse(localStorage.getItem("city")) || [];

//     for(let city of cityName){
//         const p = document.createElement("p");
//         p.textContent = `City's Name is ${city.city}`

//         output.appendChild(p);

//     }
// }

// render();
// btn.addEventListener('click', function(){
//     if(city.value === ""){
//         alert("Please Enter the city's name!");
//         return;
//     }

//     data.push({city: city.value})

//     localStorage.setItem("city", JSON.stringify(data));

//     render();

//     city.value = "";




// })


   
// const btn = document.getElementById("addBtn");
// const output = document.getElementById("output");


// let data = localStorage.getItem("nameAndage");
// data = data? JSON.parse(data) : [];


// btn.addEventListener('click', function(){
//     let name = document.getElementById("nameInput").value;
//     let age = document.getElementById("ageInput").value;
//     console.log({name, age})
    
//     if(name === ""  || age === ""){
//         alert("Please Enter the data in the related input fields.");
//         return;     
//     }
    

//     data.push({name,age});
    
//     localStorage.setItem("nameAndage", JSON.stringify(data));

//     render();

//     nameInput.value = "";
//     ageInput.value = "";
// })

// function render(){
//     output.innerHTML = "";
    
//     for(let dataSet of data){
//         const p = document.createElement("p");
//         p.textContent = `${dataSet.name}'s age is ${dataSet.age}`;
//         output.appendChild(p);
//     };
// };

// render();


// const foodInput = document.getElementById("foodInput");
// const btn = document.getElementById("addBtn");
// const output = document.getElementById("output");


// let foodData = localStorage.getItem("food");
// foodData = foodData? JSON.parse(foodData) : [];

// function addFood(){
//     const food = foodInput.value;

//     if(food === ""){
//         alert("Please Enter the Food in the Input Field");
//         return;
//     }

//     foodData.push({food})

//     localStorage.setItem("food", JSON.stringify(foodData));

//     render();

//     foodInput.value = "";

// }

// function render(){
//     output.innerHTML = "";

//     for(let fName of foodData){
//         const p = document.createElement("p");
//         p.textContent = `One of the food item is ${fName.food}`;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = "Delete";



//         output.appendChild(p)
//         p.appendChild(deleteBtn);
//     };
// };

// render();

// btn.addEventListener('click', addFood);


// Adding a Delete Button

const task =  document.getElementById("taskName");
const btn = document.getElementById("addBtn");
const output = document.getElementById("output");

let taskList = localStorage.getItem("task");
taskList = taskList? JSON.parse(taskList) : [];


function render(){
    output.innerHTML = "";

    taskList.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function(){
        taskList.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(taskList));
        render();
        });

        output.appendChild(li);
        li.appendChild(deleteBtn);
    })

}
render();

function addTask(){
    const task = document.getElementById("taskName").value;

    if(task === ""){
        alert("Please enter the task!");
        return;
    }

    taskList.push(task);
    console.log(taskList)

    localStorage.setItem("task", JSON.stringify(taskList));

    render();

    document.getElementById("taskName").value = "";


}

btn.addEventListener("click", addTask)
