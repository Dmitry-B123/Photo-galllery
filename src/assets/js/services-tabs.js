document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.services__tabs-btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
         const path = event.currentTarget.dataset.path

         document.querySelectorAll('.services__tabs-btn').forEach(function (tabContent) {
            tabContent.classList.toggle('services__tabs-btn--active')
         })

         document.querySelectorAll('.services__grid').forEach(function (tabContent) {
            tabContent.classList.remove('services__grid--active')
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('services__grid--active')
      })
   })
})