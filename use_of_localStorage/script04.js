const form = document.getElementById("newForm");
const output = document.getElementById("output");

function showdata(){

    const p = document.createElement('p');
    
    let person = localStorage.getItem("person");
    person = JSON.parse(person);
    
    for(const property in person){
        
    }

    



}
showdata();

function handleClick(){
    const nameValue = document.getElementById("nameIn").value;
    const ageValue = document.getElementById("ageIn").value;
    const emailValue = document.getElementById("emailIn").value;

    const person = {
        name: nameValue,
        age: ageValue,
        email: emailValue
    }

    localStorage.setItem("person", JSON.stringify(person));
    showdata();
}