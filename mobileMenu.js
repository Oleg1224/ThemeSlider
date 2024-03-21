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