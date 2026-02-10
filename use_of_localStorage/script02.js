const form = document.getElementById("myForm")
const display = document.getElementById("output");

function showData(){
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.id = "p1";
    p2.id = "p2";
    p3.id = "p3";

    p1.innerText = localStorage.getItem("name");
    p2.innerText = localStorage.getItem("age");
    p3.innerText = localStorage.getItem("email");

    display.appendChild(p1);
    display.appendChild(p2);
    display.appendChild(p3);
}

showData();

function handleClick(){
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const email= document.getElementById("emailInput").value;
       
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);

    showData();
}

// form.addEventListener('submit', handleClick);