const buttons = document.querySelectorAll('.ripple')



buttons.forEach(button => {
    button.addEventListener('click', function(e){
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = e.offsetY + 'px'
        circle.style.left = e.offsetX + 'px'
        button.appendChild(circle)
        console.log(circle.style.left)
        setTimeout(() => circle.remove(), 400)
    })
})

