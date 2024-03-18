const colors = ["#234b75", "#328521", "#8f1e18", "#000000"];
let slider = document.querySelector('.slider');
let slide = document.querySelectorAll('.slide');
let btn = document.querySelectorAll('.btn');
let checkIndex = 0;
function colorsChange (all) {
    document.body.style.backgroundColor = colors[all]
}
function replit () {
    colorsChange(checkIndex)
}
function showSlide (show) {
    slider.style.transform = `translateX(-${show*100}%)`
}
function toSlide (show) {
    checkIndex=show
    showSlide(checkIndex)
    replit()
}
function nextSlide () {
    checkIndex=(checkIndex+1)%slide.length
    showSlide(checkIndex)
}
function prevSlide () {
    checkIndex=(checkIndex-1+slide.length)%slide.length
    showSlide(checkIndex)
}
for(let i = 0; i<btn.length; i++) {
    btn[i].addEventListener('click', function () {
        toSlide(i)
    })
}
let headMenu = document.querySelector('.header__menu');
let menu = document.querySelector('.menu')
headMenu.addEventListener('click', function() {
    if(menu.className === 'menu') {
        menu.classList.add('new')
    }
    else {
        menu.classList.remove('new')
    }
})