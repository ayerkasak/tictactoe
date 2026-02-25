// // localStorage.clear();
// const nameInput = document.getElementById("nameInput");
// const btn = document.getElementById("addBtn");
// const output = document.getElementById("output");

// let data = localStorage.getItem("name");
// data = data ? JSON.parse(data) : [];

// btn.addEventListener('click', function(){
//     const name = nameInput.value;

//     data.push(name);
    
//     localStorage.setItem("name", JSON.stringify(data));
    
//     showData();

//     nameInput.value = "";
    
// });

// function showData(){
//     output.innerHTML = "";
//     let data = JSON.parse(localStorage.getItem("name"));
    
//     for(let s of data){
//         const div = document.createElement("div");
//         div.textContent = `The name is ${s}`

//         output.appendChild(div);}

// }

//     showData();


const city = document.getElementById("cityName");
const btn = document.getElementById("addBtn");
const output = document.getElementById("output");

let data = localStorage.getItem("city");
data = data ? JSON.parse(data) : [];

function render(){
    output.innerHTML = "";
    let cityName = JSON.parse(localStorage.getItem("city")) || [];

    for(let city of cityName){
        const p = document.createElement("p");
        p.textContent = `City's Name is ${city.city}`

        output.appendChild(p);

    }
}

render();
btn.addEventListener('click', function(){
    if(city.value === ""){
        alert("Please Enter the city's name!");
        return;
    }

    data.push({city: city.value})

    localStorage.setItem("city", JSON.stringify(data));

    render();

    city.value = "";




})