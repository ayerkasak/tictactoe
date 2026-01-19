// const p = document.getElementById("text");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     p.innerText = "DOM is Fun."
// });

// dom revision q 2
// const inputItem = document.getElementById("itemInput");
// const btn = document.getElementById("addBtn");
// const list = document.getElementById("itemList");

// btn.addEventListener('click', function(){
//     if(inputItem.value === ""){
//         alert("Please enter an item.");
//         return;
//     }
//     const li = document.createElement("li");
//     li.innerText = inputItem.value;
//     list.appendChild(li);
//     inputItem.value = "";
// });

// dom revision q 3
// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     if(p.style.display === "none"){
//         p.style.display = "block";
//     }else{
//         p.style.display = "none";
//     }
// });

// dom revision q 4

// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     p.style.backgroundColor = "yellow";

// });

// dom revision q 5

// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     if(p.style.backgroundColor === "yellow"){
//         p.style.backgroundColor = "";
//     } else{
//         p.style.backgroundColor = "yellow";

//     }

// });

// DOM revision question 6
// const addText = document.getElementById("addText");
// const p = document.getElementById("p");

// addText.addEventListener("input", function(){
//     p.innerText = "Characters:" + addText.value.length;

// })

// const addText = document.getElementById("addText");
// const btn = document.getElementById("btn");
// const listItem = document.getElementById("listItem");

// btn.addEventListener('click', function(){

//     if(addText.value === ""){
//         alert("Please enter text");
//         return;
//     };

//     const li = document.createElement('li');
//     li.innerText = addText.value;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerText = "Delete";
//     deleteBtn.addEventListener('click', function(){
//         li.remove();
//     })

//     li.appendChild(deleteBtn);
//     listItem.appendChild(li);

//     addText.value ="";
// });"



// const nam = 1221;
// function checkingPalindrome(a){
//    let numbString = `${a}`
//    let len = numbString.length
   
//     for(let i = 0; i < len/2; i++){
        
//         if(numbString[i] !== numbString[len - 1 - i]){
//             return "not a palindrome number";
//         }
//     }
//     return "a palindrome number"
// }

// console.log(checkingPalindrome(nam));


// checking a palindrome number
// const num = 121;
// let 


// const p = document.getElementById("p");
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//         p.innerText = "I Love You Baby"
// });
// mySplitter function
// const sentence = "I Love You";
// const words = sentence.split(" ");
// console.log(words.length);

// function mySplit(splitter){
//     let arr = [];
//     let word = "";
//     for(let i = 0; i < sentence.length; i++){
//         if(sentence[i] === splitter){
//             arr.push(word);
//             word = "";
//         }else{
//             word += sentence[i];
//         }
//         if(i == sentence.length - 1){
//             arr.push(word)
//         }

//     }
//     return arr;
// }
// console.log(mySplit(" ").length);


// function myMap()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function mymap(numbers){
//     let newNumber = [];
//     for(let i = 0; i < numbers.length ; i++){
//             newNumber.push(numbers[i] * 10)
//     }
//     return newNumber
// }
// console.log(mymap(numbers));


// function myFilter()
// const listedNum = [10,29,36,71,67,10,]
// function isGreaterThan25(num, index, array){
//     console.log({num, index, array});
//     return num > 25

// }

// console.log(listedNum.filter(isGreaterThan25));


// function myFilter(fun){
//     let newNumb = [];
//     for(let i = 0; i < listedNum.length; i++){
//         if(fun(listedNum[i], i, listedNum))
//             newNumb.push(listedNum[i]);
//     }
//     return newNumb
// }
// console.log(myFilter(isGreaterThan25));

// counting occurence

const fruits = ["apple", "banana", "apple", "kiwi", "orange"];
function countingOccurence(arr){
    let occurence = {};
    for(let i = 0; i < arr.length; i++){
        if(occurence[arr[i]]){
            occurence[arr[i]] += 1;
        }else{
            occurence[arr[i]] = 1;
        }
    }
    return occurence
}
console.log(countingOccurence(fruits));

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const wordsCount = {};
// for(let i = 0; i < words.length; i++){
//   if(wordsCount[words[i]]){
//     wordsCount[words[i]] += 1
//   } else {
//     wordsCount[words[i]] = 1
//   }
// }

// console.log(wordsCount);
