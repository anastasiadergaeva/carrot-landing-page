function openResponsiveMenu() {
    const headerBurgerElement = document.querySelector('.header__burger');
    const headerMenuElement = document.querySelector('.header__menu');
    const bodyElement = document.querySelector('body');
    headerBurgerElement.classList.toggle('active');
    headerMenuElement.classList.toggle('active');
    bodyElement.classList.toggle('lock');
    document.querySelectorAll('.header__list a').forEach(function (element) {
        element.addEventListener("click", function () {
            headerBurgerElement.classList.remove('active');
            headerMenuElement.classList.remove('active');
            bodyElement.classList.remove('lock');
        });
    });
}

document.querySelector('.header__burger').onclick = openResponsiveMenu;