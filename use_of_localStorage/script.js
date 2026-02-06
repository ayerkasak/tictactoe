const input = document.getElementById("textInput");
const btn = document.getElementById("saveBtn");
const display = document.getElementById("display");

window.addEventListener('DOMContentLoaded', function(){
    const savedText = localStorage.getItem("myText");
    if(savedText){
        display.innerText = savedText;
    }
})


btn.addEventListener('click', function(){
    const value = input.value;
    
    localStorage.setItem("myText", value);
    display.innerText = value;
});