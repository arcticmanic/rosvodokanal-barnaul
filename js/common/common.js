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

  var $cities = $('.services-list .city-list')
  var $service_item = $('.services-list .item')
  $('.services-list .item ').click(function() {
    $cities.fadeOut()
    $('.city-list', this).fadeToggle()
  })

  $(document).on('click', '.delete-place', function() {
    $(this)
      .parent()
      .remove()
  })

  var wrapper = $('.file_upload'),
    inp = wrapper.find('input'),
    btn = wrapper.find('button'),
    lbl = wrapper.find('div')
  btn.focus(function() {
    inp.focus()
  })
  // Crutches for the :focus style:
  inp
    .focus(function() {
      wrapper.addClass('focus')
    })
    .blur(function() {
      wrapper.removeClass('focus')
    })

  var file_api =
    window.File && window.FileReader && window.FileList && window.Blob
      ? true
      : false

  inp
    .change(function() {
      var file_name
      if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name
      else file_name = inp.val().replace('C:\\fakepath\\', '')

      if (!file_name.length) return

      if (lbl.is(':visible')) {
        lbl.text(file_name)
        btn.text('Выбрать')
      } else btn.text(file_name)
    })
    .change()

  $(window).resize(function() {
    $('.file_upload input').triggerHandler('change')
  })

  function equal_height($elem, $parent) {
    var highestBox = 0
    $($elem, $parent).each(function() {
      if ($(this).height() > highestBox) {
        highestBox = $(this).height()
      }
    })
    $($elem, $parent).height(highestBox)
  }

  // function slider_custom(
  //   $slickElement,
  //   $navigate,
  //   $slideToShow,
  //   $fade,
  //   sibl_slider
  // ) {
  //   // var $slickElement = $('.jumbotron__slider');
  //   var $active__number = $('.active-slide__number', $navigate)
  //   var $slide__count = $('.slide__count', $navigate)

  //   $slickElement.on('init reInit beforeChange', function(
  //     event,
  //     slick,
  //     currentSlide,
  //     nextSlide
  //   ) {
  //     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  //     var i = (nextSlide ? nextSlide : 0) + 1
  //     $active__number.text(i)
  //     $slide__count.text(slick.slideCount)
  //   })

  //   $slickElement.slick({
  //     slidesToShow: $slideToShow,
  //     slidesToScroll: 1,
  //     fade: $fade,
  //     arrows: false,
  //     autoplay: false,
  //     dots: false,
  //     adaptiveHeight: false,
  //     asNavFor: sibl_slider === '' ? false : sibl_slider,
  //     responsive: [
  //       {
  //         breakpoint: 1220,
  //         rtl: false,
  //         settings: {
  //           slidesToShow: $slideToShow < 2 ? 1 : $slideToShow - 1,
  //           slidesToScroll: 1
  //         }
  //       },
  //       {
  //         breakpoint: 991,
  //         rtl: false,
  //         settings: {
  //           slidesToShow: $slideToShow < 3 ? 1 : $slideToShow - 2,
  //           slidesToScroll: 1
  //         }
  //       },
  //       {
  //         breakpoint: 768,
  //         rtl: false,
  //         settings: {
  //           slidesToShow: $slideToShow < 4 ? 1 : $slideToShow - 3,
  //           slidesToScroll: 1
  //         }
  //       },
  //       {
  //         breakpoint: 550,
  //         rtl: false,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1
  //         }
  //       },
  //       {
  //         breakpoint: 400,
  //         rtl: false,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   })

  //   $('.slide-nav-arrow.left', $navigate).click(function(e) {
  //     e.preventDefault()
  //     $slickElement.slick('slickPrev')
  //   })

  //   $('.slide-nav-arrow.right', $navigate).click(function(e) {
  //     e.preventDefault()
  //     $slickElement.slick('slickNext')
  //   })
  // }

  // slider_custom(
  //   $('.clients-slider'),
  //   $('.clients-slider__navigate'),
  //   6,
  //   false,
  //   ''
  // )
})
