// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
// p.innerText = "Welcome To DOM Practice."
// });

// const add = document.getElementById("add");
// const addBtn = document.getElementById("addBtn");
// const ul = document.getElementById("list");

// addBtn.addEventListener('click', function(){
//     const inputValue = add.value;

//     if(inputValue === ""){
//         alert("Please Enter Something!");
//         return;
//     }
    
//     const li = document.createElement("li");
//     li.innerText = inputValue;

//     ul.appendChild(li);

//     add.value = "";
// });

// const container = document.getElementById("container");
// const btn = document.createElement("button");
// btn.textContent = "Click Me";

// container.appendChild(btn);

// btn.addEventListener('click', function(){
//     alert("Button was clicked.");
// }); 

const p = document.getElementById("myPara");
const changeBtn = document.getElementById("changeBtn");
const removeBtn = document.getElementById("removeBtn");

changeBtn.addEventListener('click', function(){
    p.style.color = "red";
p.style.fontSize = "20px"

});

removeBtn.addEventListener('click', function(){
    // p.style.removeProperty("color");
    p.removeAttribute("style");
})