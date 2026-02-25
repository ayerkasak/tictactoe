// localStorage.clear();
const nameInput = document.getElementById("nameInput");
const btn = document.getElementById("addBtn");
const output = document.getElementById("output");

let data = localStorage.getItem("name");
data = data ? JSON.parse(data) : [];

btn.addEventListener('click', function(){
    const name = nameInput.value;

    data.push(name);
    
    localStorage.setItem("name", JSON.stringify(data));
    
    showData();

    nameInput.value = "";
    
});

function showData(){
    output.innerHTML = "";
    let data = JSON.parse(localStorage.getItem("name"));
    
    for(let s of data){
        const div = document.createElement("div");
        div.textContent = `The name is ${s}`

        output.appendChild(div);}

}

    showData();