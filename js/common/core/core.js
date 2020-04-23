$(document).ready(function () {
  new LazyLoad({
    elements_selector: `.lazy`,
    use_native: true,
  })

  new LazyLoad({
    elements_selector: `.text img`,
    use_native: true,
  })

  $('body').materialScrollTop({
    easing: 'swing',
  })

  $('.sidemenu__item_active')
    .next('.sidemenu__list')
    .toggleClass('sidemenu__list_opened')
    .slideToggle()

  $(document).on(
    'click',
    '.sidemenu__link-cont_with-arrow .icon-accord',
    function () {
      $(this)
        .closest('.sidemenu__item')
        .toggleClass('sidemenu__item_active')
        .next('.sidemenu__list')
        .toggleClass('sidemenu__list_opened')
        .slideToggle()
    }
  )

  $(document).on('click', '.footer-top__title-icon', function () {
    $(this)
      .closest('.footer-top__title-cont')
      .toggleClass('footer-top__title-cont_active')
      .next('.footer-menu')
      .toggleClass('footer-menu_opened')
      .slideToggle()
  })
})
