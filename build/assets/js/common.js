"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var laptopW = 1400,
    tabletW = 1024,
    hoverW = 1024,
    mobileLandscapeWBig = 850,
    mobileLandscapeW = 768,
    mobileW = 500,
    mobileSSW = 350;

function setClamps(object) {
  var _loop = function _loop(elQuerySel) {
    var elsNodeList = document.querySelectorAll(elQuerySel);

    var els = _toConsumableArray(elsNodeList);

    if (els.length !== 0) {
      els.forEach(function (el) {
        $clamp(el, {
          clamp: object[elQuerySel]
        });
      });
    }
  };

  for (var elQuerySel in object) {
    _loop(elQuerySel);
  }
}

$(document).ready(function () {
  $('table').wrap("<div class='table-container'></div>");
  $('.input_phone').mask('+7 (999) 999-99-99');
  $('.datepicker-here').datepicker({
    language: 'ru',
    minDate: new Date()
  });
  $('a.open-modal').click(function (event) {
    $(this).modal({
      fadeDuration: 250
    });
    return false;
  });
});

function adjustElSize() {
  $('.header-bottom .city-list').width($('.header-bottom .all-sites').width());
}

$(document).ready(function () {
  adjustElSize();
});
$(document).ready(function () {
  var _w = $(window).width();

  new LazyLoad({
    elements_selector: ".lazy",
    use_native: true
  });
  new LazyLoad({
    elements_selector: ".text img",
    use_native: true
  });
  $('body').materialScrollTop({
    easing: 'swing'
  });
  $('.sidemenu__item_active').next('.sidemenu__list').toggleClass('sidemenu__list_opened').slideToggle();
  $(document).on('click', '.sidemenu__link-cont_with-arrow .icon-accord', function () {
    $(this).closest('.sidemenu__item').toggleClass('sidemenu__item_active').next('.sidemenu__list').toggleClass('sidemenu__list_opened').slideToggle();
  });
  $(document).on('click', '.footer-top__title-icon', function () {
    $(this).closest('.footer-top__title-cont').toggleClass('footer-top__title-cont_active').next('.footer-menu').toggleClass('footer-menu_opened').slideToggle();
  });
  var $cities = $('.services-list .city-list');
  var $service_item = $('.services-list .item');
  $('.services-list .item ').click(function () {
    $cities.fadeOut();
    $('.city-list', this).fadeToggle();
  });
  $(document).on('click', '.delete-place', function () {
    $(this).parent().remove();
  });
  var wrapper = $('.file_upload'),
      inp = wrapper.find('input'),
      btn = wrapper.find('button'),
      lbl = wrapper.find('div');
  btn.focus(function () {
    inp.focus();
  }); // Crutches for the :focus style:

  inp.focus(function () {
    wrapper.addClass('focus');
  }).blur(function () {
    wrapper.removeClass('focus');
  });
  var file_api = window.File && window.FileReader && window.FileList && window.Blob ? true : false;
  inp.change(function () {
    var file_name;
    if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name;else file_name = inp.val().replace('C:\\fakepath\\', '');
    if (!file_name.length) return;

    if (lbl.is(':visible')) {
      lbl.text(file_name);
      btn.text('Выбрать');
    } else btn.text(file_name);
  }).change();
  $(window).resize(function () {
    $('.file_upload input').triggerHandler('change');
  });

  function equal_height($elem, $parent) {
    var highestBox = 0;
    $($elem, $parent).each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).height();
      }
    });
    $($elem, $parent).height(highestBox);
  } // function slider_custom(
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

});
$(document).ready(function () {
  var eyeVersion = function () {
    var $container = $('html');
    return {
      init: function init() {
        $('.eye-version').on('click', function () {
          $('.eye-version-panel').slideToggle();
          $('.eye-version').toggleClass('eye-version-active');
          var set = !$container.hasClass('eye-version-active');

          if (set) {
            $container.removeClass('eye-version-std').addClass('eye-version-active').addClass('color-' + $('.eye-version__color.m--current').data('color'));
            $('.header__eye-version_panel').slideDown(300);
          } else {
            $container.removeClass('eye-version-active').removeClass('scale scale-1 scale-2 scale-3').removeClass('color-white color-black').addClass('eye-version-std');
            $('.header__eye-version_panel').slideUp(300);
            $('.eye-version__scale.m--current').removeClass('m--current');
          }

          eyeVersion.save('set', set);
        });
        $('.eye-version__scale').on('click', function (e) {
          e.preventDefault();
          var $this = $(this);

          if ($container.hasClass('eye-version-active') && !$this.hasClass('m--current')) {
            $('.eye-version__scale').removeClass('m--current');
            $this.addClass('m--current');
            $container.removeClass('scale-1 scale-2 scale-3').addClass('scale-' + $this.data('scale')).addClass('scale');
            eyeVersion.save('scale', $this.data('scale'));
          } else if ($container.hasClass('eye-version-active') && $this.hasClass('m--current')) {
            $this.removeClass('m--current');
            $container.removeClass('scale scale-1 scale-2 scale-3');
          }
        });
        $('.eye-version__color').on('click', function (e) {
          e.preventDefault();

          if ($container.hasClass('eye-version-active')) {
            var $this = $(this);
            $('.eye-version__color').removeClass('m--current');
            $this.addClass('m--current');
            $container.removeClass('color-white color-black').addClass('color-' + $this.data('color'));
            eyeVersion.save('color', $this.data('color'));
          }
        });
        $('.eye-version-item_back').on('click', function (e) {
          $('.eye-version-active').removeClass('eye-version-active');
          $('.eye-version').addClass('eye-version-std');
          $('.eye-version__scale.m--current').removeClass('m--current');
          $('.eye-version-panel').slideToggle();
          e.preventDefault();
          $container.removeClass('eye-version').removeClass('scale scale-1 scale-2 scale-3').removeClass('color-white color-black');
          $('.header__eye-version_panel').slideUp(300);
          eyeVersion.save('set', false);
        });
        $('.eye-version, .eye-version__scale, .eye-version-item_back').on('click', function () {
          adjustElSize();
        });
      },
      save: function save(type, value) {
        console.log(type, value);
      }
    };
  }();

  eyeVersion.init();
});
$(document).ready(function (e) {
  var getSelect2Id = function getSelect2Id(selectId) {
    return $(selectId).select2('data')[0].id;
  }; // const addErrorOnInvalidInput = (invalidInputs) => {
  //   for (const invalidInput of invalidInputs) {
  //   }
  // }


  $('form.validate').on('submit', function (e) {
    console.log(!!getSelect2Id('#work-type'), !!getSelect2Id('#city-district'));
  });
});
$(document).ready(function () {
  $(document).on('click', '.header-bottom .all-sites .all-sites__text', function () {
    $(this).closest('.all-sites').toggleClass('active');
    $(this).closest('.header-bottom').find('.city-list').fadeToggle(500);
  }).on('mouseleave', '.header-bottom .all-sites', function () {
    $(this).removeClass('active');
    $(this).find('.city-list').fadeOut(500);
  }).on('mouseover', '.header-bottom__item', function () {
    $(this).addClass('submenu-is-opened');
    $(this).find('.submenu').fadeIn(500);
  }).on('mouseleave', '.header-bottom__item', function () {
    $(this).removeClass('submenu-is-opened');
    $(this).find('.submenu').fadeOut(500);
  });
});
$(document).ready(function () {
  var menu = new MmenuLight(document.querySelector('#my-menu'));
  var navigator = menu.navigation({
    title: 'logo'
  });
  var drawer = menu.offcanvas({
    position: 'right'
  });
  document.querySelector("a[href='#my-menu']").addEventListener('click', function (evnt) {
    evnt.preventDefault();
    drawer.open();
  });
  $(document).on('click', '.mobile-menu .all-sites .all-sites__text', function () {
    var it = $(this);
    it.closest('.all-sites').toggleClass('active');
    $('.city-list').fadeToggle(500);
  });
});
//# sourceMappingURL=common.js.map
