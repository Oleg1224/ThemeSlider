/* let paralax = document.querySelectorAll('#paralax'); */
let paralax = document.querySelectorAll('.paralax');
let paralaxTwo = document.querySelectorAll('.paralaxTwo');
/* let paralaxIndex = 0; */
window.addEventListener('mousemove', function(event) {
    let x = event.offsetX
    let y = event.offsetY
    for(let i = 0; i<paralax.length; i++) {
        let images = paralax[i]
        images.style.transform = `translate(${-x/80}px, ${-y/80}px)`
    }
    for(let j = 0; j<paralaxTwo.length; j++) {
        let imagesTwo = paralaxTwo[j]
        imagesTwo.style.transform = `translate(${x/100}px, ${y/100}px)`
    }
})