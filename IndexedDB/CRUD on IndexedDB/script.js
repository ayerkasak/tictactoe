// let db;

let request = indexedDB.open("StudentDB", 2);
// console.log(request);


request.onsuccess = (e) => {
    let db = event.target.result;
    console.log("Success!")
}

request.onupgradeneeded = (e) => {
    let db = event.target.result;
    
    db.createObjectStore("Students", {
            keyPath: "id",
            unique: true,
            autoincrement: true
        }
    );

    console.log("Students store created!")
}