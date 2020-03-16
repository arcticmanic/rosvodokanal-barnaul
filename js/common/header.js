$(document).ready(function() {
  $(document)
    .on('click', '.all-sites .all-sites__text', function() {
      $(this)
        .closest('.all-sites')
        .toggleClass('active')
      $('.city-list').fadeToggle(500, function() {
        $('body').toggleClass('somethingIsOpen')
      })
    })
    .on('mouseleave', '.header-bottom .all-sites', function() {
      $('.all-sites').removeClass('active')
      $('.city-list').fadeOut(500, function() {
        $('body').removeClass('somethingIsOpen')
      })
    })
    .on('mouseover', '.header-bottom__item', function() {
      $(this).addClass('submenu-is-opened')
      $(this)
        .find('.submenu')
        .fadeIn(500)
    })
    .on('mouseleave', '.header-bottom__item', function() {
      $(this).removeClass('submenu-is-opened')
      $(this)
        .find('.submenu')
        .fadeOut(500)
    })

})