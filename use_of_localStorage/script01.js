const nameInput = document.getElementById("nameInput");
const btn = document.getElementById("saveBtn");
const output = document.getElementById("output");

function showData(){
    output.innerText = localStorage.getItem("namedata");
}

showData();

btn.addEventListener('click', function(){
    const actualName = nameInput.value;
    alert("Click function executed")
    localStorage.setItem("namedata", actualName);

    showData();
});