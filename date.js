console.log("hello")

let myDate = new Date()
console.log(myDate.toLocaleString())

// console.log(typeof(myDate))

let myNewDate = Date.now()
console.log(Math.floor(myNewDate/1000));

console.log(myDate.toLocaleDateString('default', {
    era: "narrow",
    weekday: "long",
    timeZone: "IST"
    hour:"2-digit"
}))