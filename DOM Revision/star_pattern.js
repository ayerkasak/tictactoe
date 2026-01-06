// for(let j = 1; j<= 5; j++){
//     let row = "";
// for(let i = 1; i <= j; i++){
//     // if(i <= j)
// row += "*";
// }
// console.log(row)
// }

// 2nd star patter
//      *
//     **
//    ***
//   ****
//  *****

// for(let i = 1; i <= 5; i++){
//     let row = "";
// for(let j = 1; j <= 5; j++){
//     if(j >= 6 - i){
//         row += "*";
//     }else{
//         row += " ";
//     }
// }
// console.log(row)
// }

// Third star patter
// *****
//  ****
//   ***
//    **
//     *

// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = 1; j <= 5; j++){
//         if(j >= i){
//             row += "*"
//         } else{
//             row += " ";
//         }
//     }
//     console.log(row)
// }

// Fourth Star Pattern 
// *****
// ****
// ***
// **
// *

for(let i = 1; i <= 5; i++){
    let row = "";
    for(j = 1; j <= 5; j++){
        if(j <= 6-i){
            row += "*";
        } else{
            row += " ";
        }
    }
    console.log(row);
}