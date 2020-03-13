"use strict";

var laptopW = 1400,
    tabletW = 1024,
    hoverW = 1024,
    mobileLandscapeWBig = 850,
    mobileLandscapeW = 768,
    mobileW = 500,
    mobileSSW = 350;

function adjustElSize() {
  $('.city-list').width($('.all-sites').width());
}

$(document).ready(function () {
  $('table').wrap("<div class='table-container'></div>");
  $('select').selectric();
  $('.phone').mask('99999999999');
});
$(document).ready(function () {
  adjustElSize();
});
$(document).ready(function () {
  var _w = $(window).width();

  new LazyLoad({
    elements_selector: ".lazy",
    use_native: true
  });
  var $cities = $('.services-list .city-list');
  var $service_item = $('.services-list .item');
  $('.services-list .item ').click(function () {
    $cities.fadeOut();
    $('.city-list', this).fadeToggle();
  }); // Header Functionality

  $(document).on('click', '.all-sites .all-sites__text', function () {
    $(this).closest('.all-sites').toggleClass('active');
    $('.city-list').fadeToggle(500, function () {
      $('body').toggleClass('somethingIsOpen');
    });
  }).on('mouseleave', '.all-sites', function () {
    $('.all-sites').removeClass('active');
    $('.city-list').fadeOut(500, function () {
      $('body').removeClass('somethingIsOpen');
    });
  }).on('mouseover', '.header-bottom__item', function () {
    $(this).addClass('submenu-is-opened');
    $(this).find('.submenu').fadeIn(500);
  }).on('mouseleave', '.header-bottom__item', function () {
    $(this).removeClass('submenu-is-opened');
    $(this).find('.submenu').fadeOut(500);
  });
  var $search = $('.search-menu');
  var elem = $('.navbar');
  $('.mobile-toggle').click(function (e) {
    e.preventDefault();
    $('body').addClass('overlayed'); // elem.addClass('fixed');

    $('.mobile-menu').addClass('active');
    $('.mobile-menu').animate({
      right: '0'
    }, 500);
    $('.btn_mob').addClass('open');
  });
  $('.mobile-close').click(function () {
    $('.btn_mob').removeClass('open');
    $('.mobile-menu').removeClass('active');
    $('.mobile-menu').animate({
      right: '-280'
    }, 500, function () {
      $('body').removeClass('overlayed');
      elem.removeClass('fixed');
    });
  });
  $(document).on('click', '.delete-place', function () {
    $(this).parent().remove();
  });

  if (_w > 991) {
    $('.search-icon').click(function (e) {
      e.preventDefault();
      $search.addClass('active');
    });
    $(document).click(function (e) {
      if (e.target !== $search[0] && !$search.has(e.target).length) {
        $search.removeClass('active');
      }
    });
  }

  $('.full-link').click(function (e) {
    e.preventDefault();
    $article_parent = $(this).siblings('.test-text');

    if ($(this).hasClass('open')) {
      $(this).text('Читать полностью');
      $(this).removeClass('open');
      $('article', $article_parent).truncate('collapse');
    } else {
      $('article', $article_parent).truncate('expand');
      $(this).text('Свернуть');
      $(this).addClass('open');
    }
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
  }

  function slider_custom($slickElement, $navigate, $slideToShow, $fade, sibl_slider) {
    // var $slickElement = $('.jumbotron__slider');
    var $active__number = $('.active-slide__number', $navigate);
    var $slide__count = $('.slide__count', $navigate);
    $slickElement.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (nextSlide ? nextSlide : 0) + 1;
      $active__number.text(i);
      $slide__count.text(slick.slideCount);
    });
    $slickElement.slick({
      slidesToShow: $slideToShow,
      slidesToScroll: 1,
      fade: $fade,
      arrows: false,
      autoplay: false,
      dots: false,
      adaptiveHeight: false,
      asNavFor: sibl_slider === '' ? false : sibl_slider,
      responsive: [{
        breakpoint: 1220,
        rtl: false,
        settings: {
          slidesToShow: $slideToShow < 2 ? 1 : $slideToShow - 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 991,
        rtl: false,
        settings: {
          slidesToShow: $slideToShow < 3 ? 1 : $slideToShow - 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        rtl: false,
        settings: {
          slidesToShow: $slideToShow < 4 ? 1 : $slideToShow - 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 550,
        rtl: false,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 400,
        rtl: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $('.slide-nav-arrow.left', $navigate).click(function (e) {
      e.preventDefault();
      $slickElement.slick('slickPrev');
    });
    $('.slide-nav-arrow.right', $navigate).click(function (e) {
      e.preventDefault();
      $slickElement.slick('slickNext');
    });
  }

  slider_custom($('.clients-slider'), $('.clients-slider__navigate'), 6, false, '');
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
$(document).ready(function () {
  var infoSlider = $('.info-slider');
  infoSlider.on('init reinit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (infoSlider.find('.slick-current').hasClass('poor-visibility')) {
      infoSlider.find('.slick-dots').addClass('slick-dots_dark');
    } else {
      infoSlider.find('.slick-dots').removeClass('slick-dots_dark');
    }
  });
  infoSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: false,
    dots: true,
    adaptiveHeight: false
  });
});
$(document).ready(function () {
  var jumbotronSlider = $('.jumbotron__slider');
  jumbotronSlider.on('init reInit', function (event, slick, currentSlide, nextSlide) {
    // var i = (nextSlide ? nextSlide : 0) + 1
    jumbotronSlider.find('.slick-dots li button').each(function (index) {
      if (index < 9) {
        $(this).text('0' + $(this).html());
      } else {
        $(this).text($(this).html());
      }
    });
    jumbotronSlider.find('.slick-dots').wrap("\n      <div class=\"slick-dots__cont\">\n        <div class=\"wrapper\">\n        </div>\n      </div>\n    ");
  });
  jumbotronSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var jumobtronSlide = jumbotronSlider.find('.slick-current');

    if (jumobtronSlide.hasClass('jumbotron-slide_dark')) {
      jumbotronSlider.find('.slick-dots').addClass('slick-dots_dark');
      $('.section-jumbotron .chat-bots').addClass('chat-bots_dark');
    } else {
      jumbotronSlider.find('.slick-dots').removeClass('slick-dots_dark');
      $('.section-jumbotron .chat-bots').removeClass('chat-bots_dark');
    }

    if (jumobtronSlide.hasClass('jumbotron-slide_milk-bc')) {
      jumbotronSlider.find('.slick-dots').addClass('slick-dots_dark');
      $('.section-jumbotron .chat-bots').addClass('chat-bots_dark');
    } else {
      jumbotronSlider.find('.slick-dots').removeClass('slick-dots_dark');
      $('.section-jumbotron .chat-bots').removeClass('chat-bots_dark');
    }

    if (jumobtronSlide.hasClass('jumbotron-slide_poor-visible-telegram')) {
      $('.section-jumbotron .chat-bots .icon-telegram-chat-svg').addClass('icon-telegram-chat-svg_dark');
    } else {
      $('.section-jumbotron .chat-bots .icon-telegram-chat-svg').removeClass('icon-telegram-chat-svg_dark');
    }
  });
  jumbotronSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: false,
    dots: true,
    adaptiveHeight: false,
    lazyLoad: 'ondemand'
  });
  $('.jumbotron__slider-left', '.jumbotron__nav').click(function (e) {
    e.preventDefault();
    jumbotronSlider.slick('slickPrev');
  });
  $('.jumbotron__slider-right', '.jumbotron__nav').click(function (e) {
    e.preventDefault();
    jumbotronSlider.slick('slickNext');
  });
});
$(document).ready(function () {
  if ($('.partner__item').length !== 0) {
    var amountOfPartnerItems = $('.partners__cont .partner__item').length;
    var set = new Set();
    var ampountOfVisiblePartners = 6;

    while (set.size < ampountOfVisiblePartners) {
      var prevSetSize = set.size,
          generatedRandomNum = Math.floor(Math.random() * (amountOfPartnerItems - 1 + 1) + 1);
      set.add(generatedRandomNum);

      if (set.size !== prevSetSize) {
        $('.partners__cont .partner__item:nth-child(' + generatedRandomNum + ')')[0].style.display = 'flex';
      }
    }
  }
});
$(document).ready(function () {
  function setClamps(object) {
    var _loop = function _loop(elQuerySel) {
      var els = document.querySelectorAll(elQuerySel);

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

  var elWithClammpSizes = {
    '.section-info .info-slider__text': 3,
    '.section-news .news__title': 2,
    '.section-quick-menu .quick-menu__p': 4
  };
  setClamps(elWithClammpSizes);
});
//# sourceMappingURL=common.js.map