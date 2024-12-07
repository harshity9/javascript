
setInterval(function(){
    let date = new Date
const time= (date.toLocaleTimeString())


let clock = document.querySelector('.clock')
clock.innerHTML = (time)
},1000)
