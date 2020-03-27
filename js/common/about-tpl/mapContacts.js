$(document).ready(function() {
  if ($('#about-contacts-map').length > 0) {
    ymaps.ready(init)
    function init() {
      const map = new ymaps.Map('about-contacts-map', {
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
            iconImageHref: './img/geo_blue.png',
            iconImageSize: [40, 50],
            iconImageOffset: [-20, -50]
          }
        )
      map.geoObjects.add(contactsPlacemark)
      map.behaviors.disable('scrollZoom')
    }
  }
})
