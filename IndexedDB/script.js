// IndexedDB

// console.log(indexedDB);
let openRequest = indexedDB.open("JavaScriptDB", 1);


openRequest.onsuccess = (e) => {
    console.log("from success");

    let db = openRequest.result;
    let transaction = db.transaction("students", "readwrite");
    let storeObject = transaction.objectStore("students")
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