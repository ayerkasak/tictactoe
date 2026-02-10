
const phoneNumber = document.getElementById("phoneNumber");
const btn = document.getElementById("submit");
const display = document.getElementById("output");


function showData(){
   let phones = localStorage.getItem("phoneNumber");
console.log({typeof: typeof phones, phones});
   phones = phones === null ? [] : JSON.parse(phones)
   for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    const p = document.createElement('p')
    p.id = i
    p.innerText = phone;
    display.appendChild(p)
   }
}
showData();


btn.addEventListener('click', function(){
    const phone = phoneNumber.value;
    console.log("clicked!!")
    localStorage.setItem("phoneNumber",JSON.stringify([phone]))
    showData();
}) 