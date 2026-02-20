let cart = [
    {itemname:"Colgate", description:"kya aapke toothpaste mein namak hai", quantity: 2},
    {itemname:"Pepsodent ", description:"cavity protection", quantity: 3},
    {itemname:"Sensodyne", description:"sensitivity se chhutkara", quantity: 1}   
]

// function addItem(itemName, description, quantity){
//     cart.push({itemName, description, quantity})
// }

// addItem("Lux", "Mehkti huyi khushbu", 5);

// console.log(cart);

// function deleteItem(itemName){
//     const itemsAfterDeleted = cart.filter((item) => item.itemname !== itemName)
//     cart = itemsAfterDeleted
//     return cart

// }
// console.log(deleteItem("Colgate"));

// function updateItem(itemName, updates){
//     const upadtedItems = cart.map((item) => {
//         if(item.itemname == itemName){
//             item.itemname = updates.itemname;
//             item.description = updates.description;
//             item.quantity = updates.quantity;

            // updates.itemName = itemName;
            // updates.description = description;
            // updates.quantity = quantity;
        // }
//         return item;
//     })
//     cart = upadtedItems;
//     }

// updateItem("Colgate", {itemname:"Closeup", description:"Max Freshness", quantity: 1} );

// console.log(cart);


function optimalUpdateItem(itemName, updates){
    const itemToBeUpdated = cart.findIndex((item) =>  item.itemname == itemName)
    
    cart[itemToBeUpdated].itemname = updates.itemname;
    cart[itemToBeUpdated].description = updates.description;
    cart[itemToBeUpdated].quantity = updates.quantity;

    return cart;
}
optimalUpdateItem("Colgate", {itemname:"Closeup", description:"Max Freshness", quantity: 1} );

console.log(cart);