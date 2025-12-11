// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
// p.innerText = "Welcome To DOM Practice."
// });

const add = document.getElementById("add");
const addBtn = document.getElementById("addBtn");
const ul = document.getElementById("list");

addBtn.addEventListener('click', function(){
    const inputValue = add.value;

    if(inputValue === ""){
        alert("Please Enter Something!");
        return;
    }
    
    const li = document.createElement("li");
    li.innerText = inputValue;

    ul.appendChild(li);

    add.value = "";
});