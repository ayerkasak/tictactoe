const fruits = ['apple', 'banana', 'kiwi', 'orange', 'strawberry'];
// const favFruits = fruits.slice(1, 4);
// console.log(favFruits)


const mySlice = (arr, startIndex, endIndex) => {
    let newArray = [];
    for(let i = startIndex; i < arr.length; i++){
        if(i < endIndex){
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(mySlice(fruits, 1, 4));