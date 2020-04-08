$(document).ready(function() {
  new LazyLoad({
    elements_selector: `.lazy`,
    use_native: true
  })

  new LazyLoad({
    elements_selector: `.text img`,
    use_native: true
  })

  $('body').materialScrollTop({
    easing: 'swing'
  })

  $('.sidemenu__item_active')
    .next('.sidemenu__list')
    .toggleClass('sidemenu__list_opened')
    .slideToggle()

  $(document).on(
    'click',
    '.sidemenu__link-cont_with-arrow .icon-accord',
    function() {
      $(this)
        .closest('.sidemenu__item')
        .toggleClass('sidemenu__item_active')
        .next('.sidemenu__list')
        .toggleClass('sidemenu__list_opened')
        .slideToggle()
    }
  )

  $(document).on('click', '.footer-top__title-icon', function() {
    $(this)
      .closest('.footer-top__title-cont')
      .toggleClass('footer-top__title-cont_active')
      .next('.footer-menu')
      .toggleClass('footer-menu_opened')
      .slideToggle()
  })

  if ($('#contacts-map').length > 0) {
    ymaps.ready(init)
    function init() {
      const map = new ymaps.Map('contacts-map', {
          center: [53.388919, 83.74414],
          zoom: 17,
          controls: ['zoomControl']
        }),
        contactsPlacemark = new ymaps.Placemark(
          map.getCenter(),
          {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '../assets/img/geo_red.png',
            iconImageSize: [60, 68],
            iconImageOffset: [-30, -68]
          }
        )
      map.geoObjects.add(contactsPlacemark)
      map.behaviors.disable('scrollZoom')
    }
  }
})
