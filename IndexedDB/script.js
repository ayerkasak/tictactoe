// IndexedDB

// console.log(indexedDB);
let openRequest = indexedDB.open("JavaScriptDB", 1);


openRequest.onsuccess = (e) => {
    console.log("from success");

    let db = openRequest.result;
    let transaction = db.transaction("students", "readwrite");
    let storeObject = transaction.objectStore("students");

    // Insert Data into Indexed DB
        // let request = storeObject.put({
        //     id: 3,
        //     name: 'indu',
        //     email: 'indu@gmail.com',
        // });

    // Get data from the Indexed DB

    // let index = storeObject.index("name")
    // let request = index.get('aanand');


    // Delete data from the Indexed DB
    let request = storeObject.delete(3)

    

    request.onsuccess = (e) => {
        console.log(e.target.result)
    }

    request.onerror =(e) => {
        console.log(e.target.error);
    }
}

openRequest.onupgradeneeded = (e) => {
    console.log("upgrade needed");
    let db = openRequest.result;
    if(!db.objectStoreNames.contains("students")){
        let request = db.createObjectStore("students", {keyPath: 'id'});
        request.createIndex("name", "name", {unique: false});
        request.createIndex("email", "email", {unique: true});
    }
}

openRequest.onerror = (e) => {
    console.log("Error: ", e);
}