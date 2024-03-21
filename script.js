const colors = ["#234b75", "#328521", "#8f1e18", "#000000"];
let slider = document.querySelector('.slider');
let slide = document.querySelectorAll('.slide');
let btn = document.querySelectorAll('.btn');
let checkIndex = 0;
let left = document.querySelector('.left');
let rigth = document.querySelector('.right');
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
left.addEventListener('click', function() {
    prevSlide(checkIndex)
    replit(checkIndex)
})
rigth.addEventListener('click', function() {
    nextSlide(checkIndex)
    replit(checkIndex)
})