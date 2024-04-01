let headMenu = document.querySelector('.header__menu');
let menu = document.querySelector('.menu')
let menuBox = document.querySelector('.menu__box');
headMenu.addEventListener('click', function() {
    /* headMenu.style.transform = `rotate(360deg)` */
    let headLogo = document.querySelector('.header__logo')
    if(menu.className === 'menu') {
        headMenu.src = "./img/pngwing.comыаыаыва.png"
        menu.classList.add('new')
        headMenu.classList.add('rotate')
        menuBox.classList.add('effect')
        headLogo.style.opacity = 0
    }
    else {
        menu.classList.remove('new')
        headMenu.classList.remove('rotate')
        headMenu.src = "./img/pngwing.com (13).png"
        menuBox.classList.remove('effect')
        headLogo.style.opacity = 1
    }
    /* menu.style.display = 'block'; */
    /* setTimeout(function() {
        menu.style.borderRadius = '0%'; // Делаем круглый див прямоугольным
    }, 10); */
})
let menuImg1 = document.querySelector('.menu__block1-img1');
let menuImg2 = document.querySelector('.menu__block1-img2');
let menuImg3 = document.querySelector('.menu__block1-img3');
let menuImg4 = document.querySelector('.menu__block1-img4');
