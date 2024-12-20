const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise 1 ')
    }, 1000);
}).then(function(){
    console.log('promise solved')
})