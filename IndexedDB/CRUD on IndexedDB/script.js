let db;

let request = indexedDB.open("StudentDB", 1);
console.log(request);


request.onsuccess = (e) => {
    console.log("Database Opened!")
}

// request.onupgradeneeded = (e) => {
    
// }