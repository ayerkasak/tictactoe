
// revision one changing the text and text color on click of the button
// const p = document.getElementById("p");
// const btn = document.getElementById("btn");


// btn.addEventListener('click', function(){
//     p.innerText = "Hello Revision one done as the message and color of the text is changed."
//     p.style.color = "red"
// })

// Revision 2 for entering the text in the box and after clicking the button the text will be shown in the list
const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");
const listItem = document.getElementById("listItem");

btn.addEventListener('click', function(){

    if(inputText.value === ""){
        alert("Please enter the item");
        return;
    }
    
    const li = document.createElement("li");
    li.innerText = inputText.value;

    listItem.appendChild(li);
    inputText.value = "";
})