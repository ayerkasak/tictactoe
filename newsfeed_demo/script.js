const form = document.getElementById("form");
const newsfeedBox = document.getElementById("bewsfeedBox");

let posts = 


form.addEventListener('submit', function(event){
    event.preventDefault();


    const image = document.getElementById("imageSelection").value;
    const textBox = document.getElementById("textBox").value;


    const div = document.createElement("div");
    div.textContent = `${image}, ${textBox}`;

    newsfeedBox.appendChild(div);
    image.value = "";
    textBox.value = "";

    




})