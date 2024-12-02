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

obj.name = ("345543543")

Object.freeze(obj)
obj.name = ("dsuhncsukj")

console.log(obj)