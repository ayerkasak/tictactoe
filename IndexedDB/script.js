// IndexedDB

// console.log(indexedDB);
let openRequest = indexedDB.open("JavaScriptDB", 1);


openRequest.onsuccess = (e) => {
    console.log("from success");

    let db = openRequest.result;
    let transaction = db.transaction("students", "readwrite");
    let storeObject = transaction.objectStore("students");

    // Insert Data into Indexed DB 
        // let request = storeObject.add({
        //     id: 3,
        //     name: 'aanand',
        //     email: 'aanand@gmail.com',
        // });

        
        
        
        // Update Data into Indexed DB
        // let request = storeObject.put({
            //     id: 3,
            //     name: 'indu',
            //     email: 'indu@gmail.com',
        // });
        
    // Get data from the Indexed DB

    // let index = storeObject.index("name")
    // let request = index.get('aanand');


    // Delete data from the Indexed DB
    // let request = storeObject.delete(2)
    
    // Get Data one by one using cursor from the database
    let request = storeObject.openCursor();
    
    request.onsuccess = (e) => {
        let cursor = request.result;
        if(cursor){
            let {key, value} = cursor;
            console.log(key, value);
            cursor.continue();
        }
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