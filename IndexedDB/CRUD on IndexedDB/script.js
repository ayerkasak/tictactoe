// let db;

let request = indexedDB.open("StudentDB", 1);
// console.log(request);


request.onsuccess = (e) => {
    let db = event.target.result;
    console.log(db)
}

// request.onupgradeneeded = (e) => {
    
// }