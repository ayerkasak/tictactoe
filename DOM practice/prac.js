const parents = [
    {name: "Aanad", phone: 465789, email:"aanand.b@gmail.com", children:[
        {name:"Aanandi", school:"Stepping", class:1},
        {name:"Andy", school:"Stepping", class:3},
        {name:"Ann", school:"Stepping", class:4}
      
    ]},

     {name: "Khushbu", phone: 46533789, email:"khushbu.b@gmail.com", children:[
        {name:"Adyant", school:"hope", class:1},
        {name:"Gyanu", school:"Stepping", class:3},
        {name:"Nanu", school:"Stepping", class:4}
      
    ]},

     {name: "Kasak", phone: 465789, email:"aanand.b@gmail.com", children:[
        {name:"Avika", school:"Stepping", class:1},
        {name:"Rudra", school:"Stepping", class:3},
        {name:"Reet", school:"Stepping", class:4}
      
    ]}
]
// function totalNumberOfChild(){
//     let totalChildren = 0;
//     for(let i = 0; i < parents.length; i++){

//        if (parents[i].children){

//         // totalChildren = totalChildren + parents[i].children.length
//         totalChildren += parents[i].children.length
//        }



        
        
//     }
//     return totalChildren;
// }
// console.log(totalNumberOfChild());

const totalChildren = parents.reduce((acc, curr) =>{
    return acc + curr.children.length
    
},0);
console.log(totalChildren);


// yeuta function create garne that returns the total number of child inside the array
// yeuta variable define garne having value 0, to use later
//  for loop use garne till the length of array
// for loop bhitra huda check garneki particular elementma children xa ki xaina
// chidrenxa bhane, childrenko array lengthlai particular variable add gardai store garne,
// for loop bahira chahi variable return garxa function bata
// at last print function output 