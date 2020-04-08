$(document).ready(function () {
  $(document)
    .on('click', '.header-bottom .all-sites .all-sites__text', function () {
      $(this).closest('.all-sites').toggleClass('active')
      $(this).closest('.header-bottom').find('.city-list').fadeToggle(500)
    })
    .on('mouseleave', '.header-bottom .all-sites', function () {
      $(this).removeClass('active')
      $(this).find('.city-list').fadeOut(500)
    })
    .on('mouseover', '.header-bottom__item', function () {
      $(this).addClass('submenu-is-opened')
      $(this).find('.submenu').fadeIn(500)
    })
    .on('mouseleave', '.header-bottom__item', function () {
      $(this).removeClass('submenu-is-opened')
      $(this).find('.submenu').fadeOut(500)
    })
})
