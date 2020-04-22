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

  if ($('#contacts-map').length > 0) {
    ymaps.ready(init)
    function init() {
      const map = new ymaps.Map('contacts-map', {
          center: [53.388919, 83.74414],
          zoom: 17,
          controls: ['zoomControl'],
        }),
        HintLayout = ymaps.templateLayoutFactory.createClass(
          `<div class='styled-hint-on-map'>
              {{ properties.address }}
            </div>`,
          {
            getShape: function () {
              var el = this.getElement(),
                result = null
              if (el) {
                var firstChild = el.firstChild
                result = new ymaps.shape.Rectangle(
                  new ymaps.geometry.pixel.Rectangle([
                    [0, 0],
                    [firstChild.offsetWidth, firstChild.offsetHeight],
                  ])
                )
              }
              return result
            },
          }
        )
      var contactsPlacemark = new ymaps.Placemark(
        [53.388919, 83.74414],
        {
          address: 'проспект Калинина, 116',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '../assets/img/geo_red.png',
          iconImageSize: [50, 68],
          iconImageOffset: [-25, -68],
          hintLayout: HintLayout,
        }
      )
      map.geoObjects.add(contactsPlacemark)
      map.behaviors.disable('scrollZoom')
    }
  }

  $(document).on('click', '.jumbo-icons__item[data-hint-visible="false"]', function() {
    $(this).attr('data-hint-visible', true)
  }).on('mouseleave', '.jumbo-icons__item[data-hint-visible="true"]', function () {
    $(this).attr('data-hint-visible', false)
  })
})
