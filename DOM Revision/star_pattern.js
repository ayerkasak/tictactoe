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

// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(j = 1; j <= 5; j++){
//         if(j <= 6-i){
//             row += "*";
//         } else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }

//  Fifth Star Pattern
//     *    
//    ***   
//   *****  
//  ******* 
// *********

// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = 1; j <= 9; j++){
//         if(j >= 6 - i && j <= 4 + i){
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row)
// }


// Sixth Star Pattern
//     *    
//    * *   
//   * * *
//  * * * *
// * * * * *

// for(let i = 1; i <= 5; i++){
//     let row = "";
//     let k = 1;
//     for(let j = 1; j <= 9; j++){
//         if(j >= 6 - i && j <= 4 + i && k){
//             row += "*";
//             k = 0;
//         } else {
//             row += " ";
//             k = 1;
//         }
//     }
//     console.log(row); 
// }

// Sevebth Star Pattern
// *********
// **** ****
// ***   ***
// **     **
// *       *
// for(let i = 1; i <= 5; i++){
//     row = "";
//     for (let j = 1; j <= 9; j++){
//         if(j <= 6 - i || j >= 4 + i){
//             row += "*";
//         } else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }

// Eighth Pattern
//    1   
//   121  
//  12321
// 1234321

// for(let i = 1; i <= 4; i++){
//     let k = 1;
//     let row = "";
//     for(let j = 1; j <= 7; j++){
//         if(j >= 5-i && j <= 3 + i){
//             row += k;
//             if(j<4){
//                 k++
//             } else{
//                 k--;
//             }
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
// }

// Ninth pattern

let alphabets = "abcdef";
for(let i = 1; i <= 4; i++){
    let row = "";
    let k = 1;
    for(let j = 1; j <= 7; j++){
        if(j >= 5-i && j <= 3 + i){
           row += alphabets[k-1]
           if(j<4){
            k++
           }else{
            k--;
           }
        }else{
            row += " ";
        }
    }
    console.log(row);
}
