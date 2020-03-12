const laptopW = 1400,
  tabletW = 1024,
  hoverW = 1024,
  mobileLandscapeWBig = 850,
  mobileLandscapeW = 768,
  mobileW = 500,
  mobileSSW = 350

$(document).ready(function() {
  var _w = $(window).width()

  // Jumbotron Slider On Main Page
  const jumbotronSlider = $('.jumbotron__slider')

  jumbotronSlider.on('init reInit', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var i = (nextSlide ? nextSlide : 0) + 1

    jumbotronSlider.find('.slick-dots li button').each(function(index) {
      $(this).text('0' + $(this).html())
    })

    jumbotronSlider.find('.slick-dots').wrap(`
      <div class="slick-dots__cont">
        <div class="wrapper">
        </div>
      </div>
    `)
  })

  jumbotronSlider.on('init reInit afterChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    const jumobtronSlide = jumbotronSlider.find('.slick-current')
    if (jumobtronSlide.hasClass('jumbotron-slide_dark')) {
      jumbotronSlider.find('.slick-dots').addClass('slick-dots_dark')
      $('.section-jumbotron .chat-bots').addClass('chat-bots_dark')
    } else {
      jumbotronSlider.find('.slick-dots').removeClass('slick-dots_dark')
      $('.section-jumbotron .chat-bots').removeClass('chat-bots_dark')
    }
    if (jumobtronSlide.hasClass('jumbotron-slide_milk-bc')) {
      jumbotronSlider.find('.slick-dots').addClass('slick-dots_dark')
      $('.section-jumbotron .chat-bots').addClass('chat-bots_dark')
    } else {
      jumbotronSlider.find('.slick-dots').removeClass('slick-dots_dark')
      $('.section-jumbotron .chat-bots').removeClass('chat-bots_dark')
    }
  })

  jumbotronSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: false,
    dots: true,
    adaptiveHeight: false
  })

  $('.jumbotron__slider-left', '.jumbotron__nav').click(function(e) {
    e.preventDefault()
    jumbotronSlider.slick('slickPrev')
  })

  $('.jumbotron__slider-right', '.jumbotron__nav').click(function(e) {
    e.preventDefault()
    jumbotronSlider.slick('slickNext')
  })

  // Set Clamps
  function setClamps(object) {
    for (const elQuerySel in object) {
      const els = document.querySelectorAll(elQuerySel)
      if (els) {
        els.forEach(el => {
          $clamp(el, { clamp: object[elQuerySel] })
        })
      }
    }
  }

  const elWithClammpSizes = {
    '.section-info .info-slider__text': 3,
    '.section-news .news__title': 2,
    '.section-quick-menu .quick-menu__p': 4
  }

  setClamps(elWithClammpSizes)

  // Show random partner bages on every load
  if ($('.partners__cont')) {
    const amountOfPartnerItems = $('.partners__cont .partner__item').length
    const set = new Set()
    let ampountOfVisiblePartners = 6
    // if (_w < 1300 && _w > 1072) {
    //   ampountOfVisiblePartners = 10
    // }

    while (set.size < ampountOfVisiblePartners) {
      const prevSetSize = set.size,
        generatedRandomNum = Math.floor(
          Math.random() * (amountOfPartnerItems - 1 + 1) + 1
        )
      set.add(generatedRandomNum)
      if (set.size !== prevSetSize) {
        $(
          '.partners__cont .partner__item:nth-child(' + generatedRandomNum + ')'
        )[0].style.display = 'flex'
      }
    }
  }

  // Section Info
  const infoSlider = $('.info-slider')

  infoSlider.on('init reinit afterChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    if (infoSlider.find('.slick-current').hasClass('poor-visibility')) {
      infoSlider.find('.slick-dots').addClass('slick-dots_dark')
    } else {
      infoSlider.find('.slick-dots').removeClass('slick-dots_dark')
    }
  })

  infoSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: false,
    dots: true,
    adaptiveHeight: false
  })

  $('table').wrap("<div class='table-container'></div>")

  // $('.progress .progress-bar').progressbar()

  // $(function() {
  //   $('#bars li .bar').each(function(key, bar) {
  //     var percentage = $(this).data('percentage')

  //     $(this).animate(
  //       {
  //         height: percentage + '%'
  //       },
  //       1000
  //     )
  //   })
  // })

  // var myData = {
  //   '2012': 880000,
  //   '2013': 810000,
  //   '2014': 770000,
  //   '2015': 725000,
  //   '2016': 720000,
  //   '2017': 710000,
  //   '2018': 690000
  // }
  // var myOptions = {
  //   // default: 350
  //   height: 400,

  //   // default: ''
  //   title: 'Popular Programming Languages',

  //   // width of chart
  //   width: 1000,

  //   // background color
  //   barColor: '#00a2dd',

  //   // default: 8
  //   fixPadding: 18,

  //   // bar font
  //   barFont: [0, 12, 'bold'],

  //   // label font
  //   labelFont: [0, 13, 0]
  // }
  // graphite(myData, myOptions, example);

  var $cities = $('.services-list .city-list')
  var $service_item = $('.services-list .item')
  $('.services-list .item ').click(function() {
    $cities.fadeOut()
    $('.city-list', this).fadeToggle()
  })

  function adjustElSize() {
    $('.city-list').width($('.all-sites').width())
  }

  adjustElSize()

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

  // if (_w > 768) {
  //   var $info = $('.scheme .info')
  //   var $step = $('.scheme .step')
  //   $('.scheme-img .step .number').click(function(e) {
  //     e.preventDefault()
  //     var $step = $(this).parent()

  //     $info.fadeOut()
  //     $('.info', $step).fadeToggle()
  //   })

  //   $(document).click(function(e) {
  //     if (e.target !== $step[0] && !$step.has(e.target).length) {
  //       $info.fadeOut()
  //     }
  //   })
  // }

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
  // $('.drop-menu').hover(
  //     function () {
  //         $(this).addClass('active');
  //         $('.submenu-block', this).stop(true, true).fadeIn();
  //     }, function () {
  //         $('.submenu-block', this).stop(true, true).fadeOut();
  //         $(this).removeClass('active');
  //     }
  // );

  // $('article.truncate').truncate({
  //     lines: 4,
  // });
  // $('article.description').truncate({
  //     lines: 3,
  // });

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

  $('select').selectric()

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

  // Map = (function() {
  //   var _activeClass = 'active-region'
  //   var _hoverClass = 'hover-region'
  //   return {
  //     init: function(tabs, control, callback) {
  //       var $tabs = tabs instanceof jQuery ? tabs : $(tabs),
  //         $control = control instanceof jQuery ? control : $(control)

  //       if (!$tabs.is('[data-tab]') || !$control.is('[data-tab]')) return false

  //       // $tabs.hide().filter(':first').show();
  //       // $control.filter(':first').addClass(_activeClass);

  //       $control.on({
  //         click: function() {
  //           var $this = $(this)
  //           if (!$this.hasClass(_activeClass)) {
  //             $control.removeClass(_activeClass)
  //             $this.addClass(_activeClass)
  //             $tabs.removeClass(_activeClass)
  //             var $current = $tabs
  //               .filter('[data-tab=' + $this.data('tab') + ']')
  //               .addClass(_activeClass)
  //             $('.hide-block').slideUp()
  //             $('.hide-block', $current).slideDown()
  //             // $tabs.hide().filter('[data-tab=' + $this.data('tab') + ']').show();
  //             if (callback instanceof Function) callback($this)
  //           } else {
  //             $control.removeClass(_activeClass)
  //             $tabs.removeClass(_activeClass)
  //             $('.hide-block').slideUp()
  //           }
  //         },
  //         mouseenter: function() {
  //           var $this = $(this)
  //           $tabs
  //             .filter('[data-tab=' + $this.data('tab') + ']')
  //             .addClass(_hoverClass)
  //         },
  //         mouseleave: function() {
  //           var $this = $(this)
  //           $tabs
  //             .filter('[data-tab=' + $this.data('tab') + ']')
  //             .removeClass(_hoverClass)
  //         }
  //       })
  //       $tabs.on({
  //         click: function() {
  //           var $this = $(this)
  //           if (!$this.hasClass(_activeClass)) {
  //             $tabs.removeClass(_activeClass)
  //             $this.addClass(_activeClass)
  //             $('.hide-block').slideUp()
  //             $('.hide-block', $this).slideDown()
  //             $control
  //               .removeClass(_activeClass)
  //               .filter('[data-tab=' + $this.data('tab') + ']')
  //               .addClass(_activeClass)
  //             // $tabs.hide().filter('[data-tab=' + $this.data('tab') + ']').show();
  //             if (callback instanceof Function) callback($this)
  //           } else {
  //             $control.removeClass(_activeClass)
  //             $tabs.removeClass(_activeClass)
  //             $('.hide-block').slideUp()
  //           }
  //         },
  //         mouseenter: function() {
  //           var $this = $(this)
  //           $control
  //             .filter('[data-tab=' + $this.data('tab') + ']')
  //             .addClass(_hoverClass)
  //         },
  //         mouseleave: function() {
  //           var $this = $(this)
  //           $control
  //             .filter('[data-tab=' + $this.data('tab') + ']')
  //             .removeClass(_hoverClass)
  //         }
  //       })
  //     }
  //   }
  // })()
  // Map.init('.region-list__tab', '.regions-map .region')

  // Tab = (function() {
  //   var _activeClass = 'active'
  //   return {
  //     init: function(tabs, control, callback) {
  //       var $tabs = tabs instanceof jQuery ? tabs : $(tabs),
  //         $control = control instanceof jQuery ? control : $(control)

  //       if (!$tabs.is('[data-tab]') || !$control.is('[data-tab]')) return false

  //       $tabs
  //         .hide()
  //         .filter(':first')
  //         .show()
  //       $control.filter(':first').addClass(_activeClass)

  //       $control.on('click', function() {
  //         var $this = $(this)
  //         if (!$this.hasClass(_activeClass)) {
  //           $control.removeClass(_activeClass)
  //           $this.addClass(_activeClass)
  //           $tabs
  //             .hide()
  //             .filter('[data-tab=' + $this.data('tab') + ']')
  //             .show()
  //           if (callback instanceof Function) callback($this)
  //         }
  //       })
  //     }
  //   }
  // })()
  // Tab.init('.team__tab-content', '.team__tab')
  // Tab.init('.info-list__tab-content', '.info-list__tab')

  // Tab.init('.modal-tab-content', '.modal-tab')

  function equal_height($elem, $parent) {
    var highestBox = 0
    $($elem, $parent).each(function() {
      if ($(this).height() > highestBox) {
        highestBox = $(this).height()
      }
    })
    $($elem, $parent).height(highestBox)
  }

  $('.phone').mask('99999999999')

  // $('.incr-input__div').append(
  //   '<div class="inc input-button"><img src="./img/arr-r-br.png"></div><div class="dec input-button"><img src="./img/arr-l-br.png"></div>'
  // )
  // $('.input-button').on('click', function() {
  //   var $button = $(this)
  //   var oldValue = $button
  //     .parent()
  //     .find('input')
  //     .val()

  //   if ($button.hasClass('inc')) {
  //     var newVal = parseFloat(oldValue) + 1
  //   } else {
  //     // Don't allow decrementing below zero
  //     if (oldValue > 0) {
  //       var newVal = parseFloat(oldValue) - 1
  //     } else {
  //       newVal = 0
  //     }
  //   }
  //   $button
  //     .parent()
  //     .find('input')
  //     .val(newVal)
  // })

  // $('input.timepicker').timepicker({
  //   timeFormat: 'HH:mm',
  //   startHour: 6,
  //   scrollbar: true
  // })

  // $('.datepicker').daterangepicker({
  //   singleDatePicker: true,
  //   showDropdowns: true,
  //   autoUpdateInput: true,

  //   minYear: 2019,
  //   locale: {
  //     cancelLabel: 'Clear',
  //     format: 'DD/MM/YYYY'
  //   }
  //   // }, function(chosen_date) {
  //   //     $(this).val(chosen_date.format('YYYY-MM-DD'));
  // })

  // $('.questions__form-list .question').click(function(e) {
  //   e.preventDefault()
  //   $parent = $(this).parent()
  //   if ($(this).hasClass('open')) {
  //     $(this).removeClass('open')
  //     $('.hidden-block', $parent).slideUp()
  //   } else {
  //     $('.hidden-block', $parent).slideDown()
  //     $(this).addClass('open')
  //   }
  // })

  // $('.open-answer').click(function(e) {
  //   e.preventDefault()
  //   $parent = $(this).parent()
  //   if ($(this).hasClass('open')) {
  //     $(this).text('Посмотреть ответ')
  //     $(this).removeClass('open')
  //     $('.answer', $parent).slideUp()
  //   } else {
  //     $('.answer', $parent).slideDown()
  //     $(this).text('Скрыть ответ')
  //     $(this).addClass('open')
  //   }
  // })

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

  // $('.easywater-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: true,
  //   arrows: false,
  //   autoplay: false,
  //   dots: true,
  //   adaptiveHeight: false,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       rtl: false,
  //       settings: {
  //         adaptiveHeight: true
  //       }
  //     }
  //   ]
  // })

  // $(window).on("scroll load resize", function () {
  // $(window).on(' load ', function() {
  //   // var _w = $(window).width();
  //   var $navbar = $('.navbar')
  //   if (_w <= 991) {
  //     // $(".header-menu").detach().appendTo('.menu-block ');
  //     // $(".drop-menu>a").append("<a href='#' class='mobile-more'><img src='./img/select-arr.png'></a>")
  //     $('.menu-content').wrap("<div class='wrapper'></div>")
  //     $('.header-phone')
  //       .detach()
  //       .prependTo('.mobile-menu .menu-content')
  //     $('.header-btn')
  //       .detach()
  //       .appendTo('.mobile-menu .wrapper .menu-content ')

  //     $('.search-menu')
  //       .detach()
  //       .appendTo('.mobile-menu  .wrapper  .menu-content')

  //     $('.all-sites')
  //       .detach()
  //       .appendTo('.mobile-menu .wrapper  .menu-content')
  //     $('.header-soc-list')
  //       .detach()
  //       .appendTo('.mobile-menu  .wrapper .menu-content')
  //     // $(".header-phone").detach().insertBefore('.mobile-menu');

  //     // $(".eye-version").detach().appendTo('.mobile-menu');

  //     // $(".header-lang").detach().appendTo('.mobile-menu ');
  //     $('.mobile-more').click(function(e) {
  //       e.preventDefault()
  //       $parent = $(this).parents('.drop-menu')

  //       $('.submenu', $parent).slideToggle()
  //     })
  //   }
  //   if (_w < 768) {
  //     $('.mob-top')
  //       .detach()
  //       .prependTo('.catalog-product__img-col')
  //   }
  //   if (_w > 450) {
  //     equal_height($('.special__slider-2 .slide'), $('.special__slider-2'))
  //   }
  // })
  // Eye version functionality
  const eyeVersion = (function() {
    var $container = $('html')

    return {
      init: function() {
        $('.eye-version').on('click', function() {
          $('.eye-version-panel').slideToggle()
          $('.eye-version').toggleClass('eye-version-active')
          var set = !$container.hasClass('eye-version-active')
          if (set) {
            $container
              .removeClass('eye-version-std')
              .addClass('eye-version-active')
              .addClass(
                'color-' + $('.eye-version__color.m--current').data('color')
              )
            $('.header__eye-version_panel').slideDown(300)
          } else {
            $container
              .removeClass('eye-version-active')
              .removeClass('scale-1 scale-2 scale-3')
              .removeClass('color-white color-black')
              .addClass('eye-version-std')
            $('.header__eye-version_panel').slideUp(300)
            $('.eye-version__scale.m--current').removeClass('m--current')
          }
          eyeVersion.save('set', set)
        })

        $('.eye-version__scale').on('click', function(e) {
          e.preventDefault()
          var $this = $(this)
          if (
            $container.hasClass('eye-version-active') &&
            !$this.hasClass('m--current')
          ) {
            $('.eye-version__scale').removeClass('m--current')
            $this.addClass('m--current')
            $container
              .removeClass('scale-1 scale-2 scale-3')
              .addClass('scale-' + $this.data('scale'))
              .addClass('scale')
            eyeVersion.save('scale', $this.data('scale'))
          } else if (
            $container.hasClass('eye-version-active') &&
            $this.hasClass('m--current')
          ) {
            $this.removeClass('m--current')
            $container.removeClass('scale scale-1 scale-2 scale-3')
          }
        })

        $('.eye-version__color').on('click', function(e) {
          e.preventDefault()
          if ($container.hasClass('eye-version-active')) {
            var $this = $(this)
            $('.eye-version__color').removeClass('m--current')
            $this.addClass('m--current')
            $container
              .removeClass('color-white color-black')
              .addClass('color-' + $this.data('color'))
            eyeVersion.save('color', $this.data('color'))
          }
        })

        $('.eye-version-item_back').on('click', function(e) {
          $('.eye-version-active').removeClass('eye-version-active')
          $('.eye-version').addClass('eye-version-std')
          $('.eye-version__scale.m--current').removeClass('m--current')
          $('.eye-version-panel').slideToggle()
          e.preventDefault()
          $container
            .removeClass('eye-version')
            .removeClass('scale scale-1 scale-2 scale-3')
            .removeClass('color-white color-black')
          $('.header__eye-version_panel').slideUp(300)
          eyeVersion.save('set', false)
        })

        $('.eye-version, .eye-version__scale, .eye-version-item_back').on(
          'click',
          function() {
            adjustElSize()
          }
        )
      },
      save: function(type, value) {
        console.log(type, value)
      }
    }
  })()
  eyeVersion.init()
})
