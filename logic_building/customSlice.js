const fruits = ['apple', 'banana', 'kiwi', 'orange', 'strawberry'];
// const favFruits = fruits.slice(1, 4);
// console.log(favFruits)


const mySlice = (arr) => {
    let startingIndex = 2;
    let endingIndex = 4
    let newArray = [];
    for(let i = startingIndex; i < arr.length; i++){
        if(i < endingIndex){
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(mySlice(fruits));