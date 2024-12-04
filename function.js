// function addition (num1, num2){
//     if (num1>99){
//         return `very large number`
//     }
//      let res = num1+num2
//     return res
// }

// // if there will be no return it won't return any value

// const result = addition(66,4);
// console.log(result)

// const obj1 = {
//     name: 'harshit',
//     class: '1',
//     roll_no: '23',
//     welcome: function (){
//         console.log(`${this.class} great` )
//         console.log(this)
//     }
// }
// obj1.welcome();

// console.log(this)

// function studetail (anyobject){
//     return `hello i am ${anyobject.name} and i study in class ${anyobject.class}.`
// }
// console.log(studetail(obj1))


// let arr1 = [ "abc","def","ghi","jkl" ]

// function passingarray (anyarray){
//     return anyarray 
// }

// console.log(passingarray(arr1))



// arrow function
(function arrowf(num,num1){
    const result =  console.log(num + num1)
    return result
 })(3223,321);    
//  this is iife


const addd = (numm, numm2) => 
    ( numm + numm2)

console.log(addd(223,23232))

