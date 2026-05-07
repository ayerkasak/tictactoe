//leetcode Question No. 3: find the length of the longest substring without duplicate characters.

// function longestSubstring(str){
//     let maxlength = 0;

//     for(let i = 0; i < str.length; i++){
//         let substring = "";

//         for(let j = i ; j < str.length;j++){

//             if(substring.includes(str[j])){
//                 break;
//             }

//             substring += str[j];

//             if(substring.length > maxlength){
//                 maxlength = substring.length;
//             }
//         }
//     }
//     return maxlength;
// }
// console.log(longestSubstring("abcbacb"))


// leetcode Question No. 11: Find two lines that together with the x-axis form a container, such that the container contains the most water.

// const h = [1,2,3,4,5,6,7];

 function maxArea(h){
    let area = 0;
    let containerWall = [];
    for(let i = 0; i < h.length; i++){
        for(let j = i + 1; j < h.length; j++){
            let areaOccupied = Math.min(h[i], h[j]) * (j-i);
            // console.log(areaOccupied)
            if(areaOccupied > area){
                area = areaOccupied;
                containerWall[0] = h[i];
                containerWall[1] = h[j];  

            }
        }
    }
    return {area, containerWall}; 
 }

 console.log(maxArea([1,8,6,2,5,4,8,3,7]))