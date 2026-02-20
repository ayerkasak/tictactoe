const cart = [
    {itemname:"Colgate", description:"kya aapke toothpaste mein namak hai", quantity: 2},
    {itemname:"Pepsodent ", description:"cavity protection", quantity: 3},
    {itemname:"Sensodyne", description:"sensitivity se chhutkara", quantity: 1}   
]

function addItem(itemName, description, quantity){
    cart.push({itemName, description, quantity})
}

addItem("Lux", "Mehkti huyi khushbu", 5);

console.log(cart);

