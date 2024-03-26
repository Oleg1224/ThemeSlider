let headMenu = document.querySelector('.header__menu');
let menu = document.querySelector('.menu')
headMenu.addEventListener('click', function() {
    /* headMenu.style.transform = `rotate(360deg)` */
    if(menu.className === 'menu') {
        headMenu.src = "./img/pngwing.comыаыаыва.png"
        menu.classList.add('new')
        headMenu.classList.add('rotate')
    }
    else {
        menu.classList.remove('new')
        headMenu.classList.remove('rotate')
        headMenu.src = "./img/pngwing.com (13).png"
    }
    /* menu.style.display = 'block'; */
    /* setTimeout(function() {
        menu.style.borderRadius = '0%'; // Делаем круглый див прямоугольным
    }, 10); */
})