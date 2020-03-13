$(document).ready(function() {
  var _w = $(window).width()

  new LazyLoad({
    elements_selector: `.lazy`,
    use_native: true
  })

  var $cities = $('.services-list .city-list')
  var $service_item = $('.services-list .item')
  $('.services-list .item ').click(function() {
    $cities.fadeOut()
    $('.city-list', this).fadeToggle()
  })

  // Header Functionality
  $(document)
    .on('click', '.all-sites .all-sites__text', function() {
      $(this)
        .closest('.all-sites')
        .toggleClass('active')
      $('.city-list').fadeToggle(500, function() {
        $('body').toggleClass('somethingIsOpen')
      })
    })
    .on('mouseleave', '.all-sites', function() {
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

  var $search = $('.search-menu')
  var elem = $('.navbar')
  $('.mobile-toggle').click(function(e) {
    e.preventDefault()

    $('body').addClass('overlayed')
    // elem.addClass('fixed');
    $('.mobile-menu').addClass('active')
    $('.mobile-menu').animate(
      {
        right: '0'
      },
      500
    )

    $('.btn_mob').addClass('open')
  })
  $('.mobile-close').click(function() {
    $('.btn_mob').removeClass('open')
    $('.mobile-menu').removeClass('active')
    $('.mobile-menu').animate(
      {
        right: '-280'
      },
      500,
      function() {
        $('body').removeClass('overlayed')
        elem.removeClass('fixed')
      }
    )
  })

  $(document).on('click', '.delete-place', function() {
    $(this)
      .parent()
      .remove()
  })
  if (_w > 991) {
    $('.search-icon').click(function(e) {
      e.preventDefault()
      $search.addClass('active')
    })
    $(document).click(function(e) {
      if (e.target !== $search[0] && !$search.has(e.target).length) {
        $search.removeClass('active')
      }
    })
  }

  $('.full-link').click(function(e) {
    e.preventDefault()
    $article_parent = $(this).siblings('.test-text')
    if ($(this).hasClass('open')) {
      $(this).text('Читать полностью')
      $(this).removeClass('open')
      $('article', $article_parent).truncate('collapse')
    } else {
      $('article', $article_parent).truncate('expand')
      $(this).text('Свернуть')
      $(this).addClass('open')
    }
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

  function slider_custom(
    $slickElement,
    $navigate,
    $slideToShow,
    $fade,
    sibl_slider
  ) {
    // var $slickElement = $('.jumbotron__slider');
    var $active__number = $('.active-slide__number', $navigate)
    var $slide__count = $('.slide__count', $navigate)

    $slickElement.on('init reInit beforeChange', function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (nextSlide ? nextSlide : 0) + 1
      $active__number.text(i)
      $slide__count.text(slick.slideCount)
    })

    $slickElement.slick({
      slidesToShow: $slideToShow,
      slidesToScroll: 1,
      fade: $fade,
      arrows: false,
      autoplay: false,
      dots: false,
      adaptiveHeight: false,
      asNavFor: sibl_slider === '' ? false : sibl_slider,
      responsive: [
        {
          breakpoint: 1220,
          rtl: false,
          settings: {
            slidesToShow: $slideToShow < 2 ? 1 : $slideToShow - 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 991,
          rtl: false,
          settings: {
            slidesToShow: $slideToShow < 3 ? 1 : $slideToShow - 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          rtl: false,
          settings: {
            slidesToShow: $slideToShow < 4 ? 1 : $slideToShow - 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 550,
          rtl: false,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          rtl: false,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })

    $('.slide-nav-arrow.left', $navigate).click(function(e) {
      e.preventDefault()
      $slickElement.slick('slickPrev')
    })

    $('.slide-nav-arrow.right', $navigate).click(function(e) {
      e.preventDefault()
      $slickElement.slick('slickNext')
    })
  }

  slider_custom(
    $('.clients-slider'),
    $('.clients-slider__navigate'),
    6,
    false,
    ''
  )
})
