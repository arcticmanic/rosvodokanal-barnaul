$(document).ready(function () {
  if ($('#about-contacts-map').length > 0) {
    ymaps.ready(init)
    function init() {
      const map = new ymaps.Map('about-contacts-map', {
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
          iconImageHref: '../assets/img/geo_blue.png',
          iconImageSize: [40, 50],
          iconImageOffset: [-20, -50],
          hintLayout: HintLayout,
        }
      )
      map.geoObjects.add(contactsPlacemark)
      map.behaviors.disable('scrollZoom')
    }
  }
})
