// const sym = Symbol("hello")

// const obj = {
//     name: 'harshit',
//     [sym]: "hii",
//     age: '20',
//     field: "comp sci",
//     email: "hasr@gmail.com",
//     time: "Notime"
// }
// console.log(obj["email"])

// obj.name = ("ranodm1")

// // Object.freeze(obj)
// // obj.name = ("dsuhncsukj")

// // console.log(obj)
// const today = new Date()
// const livetime = today.toLocaleString('default',{
//     timeZone: 'IST'
// })

// obj.date = function(){
//     console.log(`Hello there, I am ${this.name} and live time is ${livetime}`)
// }

// console.log(obj.date())

const obj1 = {
    a:'1',
    b:'2',
    c:'3',
    d:'4',
}

const obj2= {
    e:'5',
    f:'6',
    g:'7',
    h:'8',
}

// obj3 = { ...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.values(obj2))

const {f:m} = obj2
console.log(m)