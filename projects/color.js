const buttons = (document.querySelectorAll('.button'))

buttons.forEach(function(event){
    (addEventListener('click',function(e){
        const setColor = (e.target.id)
        document.querySelector('body').style.backgroundColor = setColor
    }))
})