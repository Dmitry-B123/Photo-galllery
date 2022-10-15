const btnSearch = document.querySelector('.header__info-search-icon');
const formSearch = document.querySelector('.header-form');

btnSearch.addEventListener('click', function () {
   formSearch.classList.toggle('header-form--active');
});
