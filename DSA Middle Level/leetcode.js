//leetcode Question No. 3: find the length of the longest substring without duplicate characters.

function longestSubstring(str){
    let maxlength = 0;

    for(let i = 0; i < str.length; i++){
        let substring = "";

        for(let j = i ; j < str.length;j++){

            if(substring.includes(str[j])){
                break;
            }
            
            substring += str[j];

            if(substring.length > maxlength){
                maxlength = substring.length;
            }
        }
    }
    return maxlength;
}
console.log(longestSubstring("abcbacb"))

 