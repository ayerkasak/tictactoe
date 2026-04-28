// let db;

let request = indexedDB.open("StudentDB", 1);
// console.log(request);


// request.onsuccess = (e) => {
//     let db = event.target.result;
//     console.log("Success!")
// }

// Adding a data into the table

request.onupgradeneeded = (e) => {
    let db = event.target.result;
    
    db.createObjectStore("Students", {
            keyPath: "id",
            autoIncrement: true
        }
    );

    console.log("Students store created!")
}


request.onsuccess = (e) =>{
    let db = event.target.result;

    let transaction = db.transaction("Students", "readwrite");
    let store = transaction.objectStore("Students");

    let addRequest = store.add({
        name: "Kasak",
        address: "Dhangadhi"
    });

    addRequest.onsuccess = (e) => {
        console.log("Student added successfully!")
    }
}
