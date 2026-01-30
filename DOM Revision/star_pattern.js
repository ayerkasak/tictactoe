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

// let alphabets = "abcdef";
// for(let i = 1; i <= 4; i++){
//     let row = "";
//     let k = 1;
//     for(let j = 1; j <= 7; j++){
//         if(j >= 5-i && j <= 3 + i){
//            row += alphabets[k-1]
//            if(j<4){
//             k++
//            }else{
//             k--;
//            }
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }

// Tenth Pattern
// abcdba
// abc dcb
// ab   cb
// a     b

// let alphabets = "abcdef";
// for(let i = 1; i <= 4; i++){
//     let row = "";
//     let k = 1;
//     for(let j = 1; j <= 7; j++){
//         if(j <= 5-i || j >= 3+i){
//             row += alphabets[k-1];
//             if(j<4){
//                 k++;
//             } else{
//                 k--;
//             }
//         }
//         else{
//             row += " ";
//             if(j == 4){
//                 k--;
//             }
//         }
//     }
//     console.log(row);
// }

// Elevnth Star pattern
//    *   
//   ***  
//  ***** 
// *******
//  ***** 
//   ***  
//    *


// let k = 0;
// for(let i = 1; i <= 7; i++){
//     let row = "";
//     if(i<=4){
//         k++;
//     } else{
//         k--;
//     }
//     for(let j = 1; j <= 7; j++){
//         if(j >= 5-k && j <= 3+k){
//             row += "*";
//         } else{
//             row += " ";
//         }

//     }
//     console.log(row);
// } 

// Twelveth Pattern
// *   
// **  
// ***
// ****
// ***
// **
// *

 
// let k = 0;
// for(let i = 1; i <= 7; i++){
//     row = "";
//     if(i<=4){
//         k++;
//     }else{
//         k--
//     }
//     for(j=1; j<=4; j++){
//         if(j<=k){
//             row += "*";
//         } else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }
    

// 13th star pattern
// *******
//  ***** 
//   ***
//    *


// for(let i = 1; i <= 4; i++){
//     let row = "";
//     for(let j = 1; j <= 7; j++){
//         if(j >= i && j<= 8-i){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }


// 14th star pattern

//    1   
//   232  
//  34543
// 4567654

// for(let i = 1; i <= 4; i++){
//     let row = "";
//     let k = i;
//     for(let j = 1; j <= 7; j++){
//         if(j >= 5 - i && j <= 3 + i){
//             row += k; 
//             if(j<4){
//                 k++;
//             }else{
//                 k--;
//             }
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }  

// 15th star Pattern
// 6543210
// 543210 
// 43210
// 3210
// 210
// 10
// 0
 
// for(let i = 1; i <= 7; i++){
//     let row = "";
//     let k = 7 - i;
//     for(let j = 1; j <= 7; j++){
//         if(j <= 8 - i){
//             row += k;
//             k--;
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }


// Sixteenth star pattern
//     1
//    12
//   123
//  1234
// 12345
//  1234
//   123
//    12
//     1

// let k = 0;
// for(let i = 1; i <= 9; i++){
//     let row = "";
//     let x = 1; 
//     if(i<6){
//         k++;
//     }else{
//         k--;
//     }
//     for(let j = 1; j <= 5; j++){
//         if(j >= 6 - k){
//             row += x;
//             x++;
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }


// Seventeenth Star Pattern with Slashes
// \*****/
// *\***/*
// **\*/**
// ***/***
// **/*\**
// */***\*
// /*****\

for(let i = 1; i <= 7; i++)