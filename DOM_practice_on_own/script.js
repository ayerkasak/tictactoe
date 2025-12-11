// const button = document.getElementById("addbtn");
// const container = document.getElementById("container");

// button.addEventListener('click', function(){
//     const para = document.createElement("p");

//     para.innerText = "This is a new paragraph created by using DOM!";

//     container.appendChild(para);
// })

const form = document.getElementById("form");
// const container = document.getElementById("container");
const tableBody = document.getElementById("tableBody");
const readBtn =  document.getElementById("readBtn");

const users = JSON.parse(localStorage.getItem("users")) || []
// displayData();

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nameValue = document.getElementById("name").value;
    const addressValue = document.getElementById("address").value;
    const phnNumValue = document.getElementById("phnNum").value;
    const passwordValue = document.getElementById("password").value;

    const user = {
        name: nameValue,
        address: addressValue,
        phoneNum: phnNumValue,
        password: passwordValue
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    
    // addRowToTable(user);
    alert("Data Saved Successfully!");
    form.reset();
    read();

    // const para = document.createElement("p");
    // const row = document.createElement("tr");
    // row.innerHTML = `
    // <td>${nameValue}</td>
    // <td>${addressValue}</td>
    // <td>${phnNumValue}</td>
    // <td>${passwordValue}</td>`

    
    
    // para.innerText = `Name: ${nameValue}, Address: ${addressValue}, Phone No.: ${phnNumValue}, Password: ${passwordValue}`

    // container.appendChild(para);
    // tableBody.appendChild(row);

});


function read(){
     tableBody.innerHTML = "";

    users.forEach(function(user) {
    const row = document.createElement("tr");

     row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.address}</td>
    <td>${user.phoneNum}</td>
    <td>${user.password}</td>
    `;

    tableBody.appendChild(row);

        
    });
}

window.addEventListener("DOMContentLoaded", read);

// read();
// function addRowToTable(user){

readBtn.addEventListener('click', read)
    
// }

// function displayData(){
//     users.forEach(user => addRowToTable(user));
// }