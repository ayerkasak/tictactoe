function numbers(arr){
    arr.forEach(num => {
        console.log(num)        
    });
}
numbers([1,2,3,4,5])

function friends(names){
    names.forEach((name) => {
        console.log(`Hello ${name}`)
    })
}
friends(["Ram", "Hari", "Sita"]);

function citiesToVisit(cities){
     cities.forEach((city) => {
        console.log(`I want to visit ${city}.`)
     })
}
citiesToVisit(["Kathmandu", "Pokhara", "Bhaktapur"])