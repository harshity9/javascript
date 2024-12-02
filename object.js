const sym = Symbol("hello")

const obj = {
    name: 'harshit',
    [sym]: "hii",
    age: '20',
    field: "comp sci",
    email: "hasr@gmail.com",
    time: "Notime"
}
console.log(obj["email"])

obj.name = ("ranodm1")

// Object.freeze(obj)
// obj.name = ("dsuhncsukj")

// console.log(obj)
const today = new Date()
const livetime = today.toLocaleString('default',{
    timeZone: 'IST'
})

obj.date = function(){
    console.log(`Hello there, I am ${this.name} and live time is ${livetime}`)
}

console.log(obj.date())