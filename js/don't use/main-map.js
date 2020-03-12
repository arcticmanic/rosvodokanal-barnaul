//contacts
if ($('#map').length) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.963773, 30.300184],
                zoom: 12
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark([59.951578, 30.290004] , {
                hintContent: 'Swissam',
                balloonContent: 'Санкт-Петербург, пр. Добролюбова, 20/1'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image'
                // Своё изображение иконки метки.
                // iconImageHref: './img/placeholder.png',
                // // Размеры метки.
                // iconImageSize: [83, 65],
                // // Смещение левого верхнего угла иконки относительно
                // // её "ножки" (точки привязки).
                // iconImageOffset: [-41, -55]
            });

        myMap.geoObjects
            .add(myPlacemark)

    });
}

// $(document).on('click', 'a[data-region-id]', function(){
//     var id = $(this).data('region-id')
//     $('#town-box>*').fadeOut(function() {
//         location.search = '?setRegion=' + id + '&query=' + location.search;
//     });
// }).on('click', 'span.town', function(){
//     $(this).next().slideToggle(300);
// });
//
// $('div.hid span').click(function () {
//     if ($(this).data('href')) {
//         window.location.href = $(this).data('href');
//     }
// });