document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.project__tabs-btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
         const path = event.currentTarget.dataset.path

         document.querySelectorAll('.project__tabs-btn').forEach(function (tabContent) {
            tabContent.classList.toggle('project__tabs-btn--active')
         })

         document.querySelectorAll('.projects__grid').forEach(function (tabContent) {
            tabContent.classList.remove('projects__grid--active')
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('projects__grid--active')
      })
   })
})