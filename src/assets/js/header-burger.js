const btnSearch = document.querySelector('.burger');
const formSearch = document.querySelector('.header__info .header__list');

btnSearch.addEventListener('click', function () {
   formSearch.classList.toggle('header__list--active');
});