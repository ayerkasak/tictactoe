// const p = document.getElementById("text");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     p.innerText = "DOM is Fun."
// });

const inputItem = document.getElementById("itemInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("itemList");

btn.addEventListener('click', function(){
    if(inputItem.value === ""){
        alert("Please enter an item.");
        return;
    }
    const li = document.createElement("li");
    li.innerText = inputItem.value;

    list.appendChild(li);
    
    inputItem.value = "";

})