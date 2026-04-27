// IndexedDB

// console.log(indexedDB);
let openRequest = indexedDB.open("JavaScriptDB", 1);


openRequest.onsuccess = (e) => {
    console.log("from success");
}

openRequest.onupgradeneeded = (e) => {
    console.log("upgrade needed");
}

openRequest.onerror = (e) => {
    console.log("Error: ", e);
}