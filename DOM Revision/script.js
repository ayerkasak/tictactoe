// const p = document.getElementById("text");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     p.innerText = "DOM is Fun."
// });

// dom revision q 2
// const inputItem = document.getElementById("itemInput");
// const btn = document.getElementById("addBtn");
// const list = document.getElementById("itemList");

// btn.addEventListener('click', function(){
//     if(inputItem.value === ""){
//         alert("Please enter an item.");
//         return;
//     }
//     const li = document.createElement("li");
//     li.innerText = inputItem.value;
//     list.appendChild(li);
//     inputItem.value = "";
// });

// dom revision q 3
// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     if(p.style.display === "none"){
//         p.style.display = "block";
//     }else{
//         p.style.display = "none";
//     }
// });

// dom revision q 4

// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     p.style.backgroundColor = "yellow";

// });

// dom revision q 5

// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     if(p.style.backgroundColor === "yellow"){
//         p.style.backgroundColor = "";
//     } else{
//         p.style.backgroundColor = "yellow";

//     }

// });

// DOM revision question 6
const addText = document.getElementById("addText");
const p = document.getElementById("p");

addText.addEventListener("input", function(){
    p.innerText = "Characters:" + addText.value.length;

})