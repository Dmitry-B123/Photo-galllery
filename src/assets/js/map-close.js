const btnClose = document.querySelector(".close-info-map");
const block = document.querySelector(".contacts__map-description");

btnClose.addEventListener('click', function () {
   block.classList.add('contacts__map-description--close');
});