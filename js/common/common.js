$(document).ready(function() {
  var _w = $(window).width()

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
      var map2 = new ymaps.Map('contacts-map', {
          center: [53.388919, 83.744140],
          zoom: 17,
          controls: ['zoomControl']
        }),
        contactsPlacemark = new ymaps.Placemark(
          map2.getCenter(),
          {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
          },
          {
            iconLayout: 'default#image',
            // iconImageHref: 'img/geo.png',
            iconImageSize: [45, 50],
            iconImageOffset: [-22.5, -50]
          }
        )
      map2.geoObjects.add(contactsPlacemark)
      map2.behaviors.disable('scrollZoom')
    }

  }
})
