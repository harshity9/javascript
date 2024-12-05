// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     for (let j = 0; j <=10; j++) {
//         const element1 = j;
//         console.log(element1)
// }
//     console.log(element)
// }
// for (let i = 1; i <= 10; i++) {
//     const arr = [];
//     let x = i*i
//    console.log(i*i)
//     console.log(arr)
//     }
//  let arr = ['efewf', 'erfedfce', 'fewfcew', 'ewfcew']

//  arr.forEach(item => {
//     console.log(item)
//  });
// const myarr = ['fsef', 'dsfvds0', 'fcds', 'rdfvsd']

// myarr.forEach((item)=>{
//    console.log(item)
// })

// const mynum = [32,12,212,32,323,123,42231,3,]

// const mynumber = mynum.filter((num)=>{
//    return num > 3
// })
// console.log(mynumber)

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   const retbooks = library.filter((book)=>{
      return (book.readingStatus === true)
   })
   console.log(retbooks)