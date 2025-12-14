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

// const p = document.getElementById("myPara");
// const changeBtn = document.getElementById("changeBtn");
// const removeBtn = document.getElementById("removeBtn");

// changeBtn.addEventListener('click', function(){
//     p.style.color = "red";
// p.style.fontSize = "20px"

// });

// removeBtn.addEventListener('click', function(){
//     // p.style.removeProperty("color");
//     p.removeAttribute("style");
// })


// const p = document.getElementById("myPara");
// const div = document.createElement('div');
// const btn = document.createElement('button');
// btn.textContent = "Click";
// // div.style.color
// p.appendChild(div);
// div.appendChild(btn)
// btn.addEventListener('click', function(){
//     p.style.border = "3px solid black"

// })

// const p = document.getElementById("myPara");
// const div = document.createElement('div');
// const btn = document.createElement('button');
// btn.textContent = "Click";

// div.style.width = "200px";
// div.style.height = "100px";
// div.style.background = "lightgray";

// Add the button inside the div

// Add the div to the paragraph (or anywhere)
// p.appendChild(div);

// btn.addEventListener('click', function(){
//     div.style.border = "3px solid black";  // Add border to div
// });
// p.appendChild(btn);
// const colorBtn = document.createElement('button');
// colorBtn.textContent = "Click to Change Color";

// colorBtn.addEventListener('click', function(){
//     p.style.color = "blue";
// })

// document.body.appendChild(colorBtn);
// const p = document.getElementById("myPara");
// const biggerText = document.createElement("button");
// const smallerText = document.createElement("button");
// const resetBtn = document.createElement("button");
// biggerText.textContent = "Click for Bigger Text";
// smallerText.textContent = "Click for Smaller text"
// resetBtn.textContent = "Click for Reset"
// biggerText.addEventListener('click', function(){
//     p.style.fontSize = "40px";
// });

// smallerText.addEventListener('click', function(){
//     p.style.fontSize = "25px";
// });

// resetBtn.addEventListener('click', function(){
//     p.removeAttribute("style");
// });

// document.body.appendChild(biggerText);
// document.body.appendChild(smallerText);
// document.body.appendChild(resetBtn);

// p.addEventListener('mouseover', function(){
//     p.style.color = "blue";
// });

// p.addEventListener('mouseout', function(){
//     p.style.color = "black";
// });
const p = document.getElementById("myPara");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener('click', function(){
    if(p.style.backgroundColor === "yellow"){
        p.style.backgroundColor = "";
    } else {
        p.style.backgroundColor = "yellow";
    }
})
