// const head = document.getElementById("heading");
// const button = document.getElementById("btn");
// const msg = document.getElementById("msg")
// msg.textContent = "New Text"
// msg.style.color = "red";
// msg.style.fontSize = "30px";
// msg.style.backgroundColor = "yellow";


// document.getElementById("myImage").src = "tree.jpg"

// console.log(head);
// console.log(button);


// const catButton = document.getElementById("showCatBtn");
// const dogButton = document.getElementById("showDogBtn");

// catButton.addEventListener("click", function(){
//     alert("You clicked the cat Button!");
// });

// dogButton.addEventListener("click", function(){
//     alert("You clicked Dog Button!");
// });


// let heading = document.getElementById("title");
// document.getElementById("btn").addEventListener('click', function(){
// heading.innerText = "I Love You Baby";
    
//     alert("Button Clicked!");
// });


const username = document.getElementById("name");
const useremail = document.getElementById("email");
const userphnNum = document.getElementById("phoneNo");
const useraddress = document.getElementById("address");
const userpassword = document.getElementById("password");
const button = document.getElementById("btn");

const output = document.getElementById("output");
button.addEventListener('click', function(){

    const userDetails = {
        name: username.value,
        email: useremail.value,
        phoneNo: userphnNum.value,
        address: useraddress.value,
        password: userpassword.value
    };

    output.textContent = JSON.stringify(userDetails, null, 2);

    username.value = "";
    useremail.value ="";
    userphnNum.value = "";
    useraddress = "";
    userpassword = "";

});