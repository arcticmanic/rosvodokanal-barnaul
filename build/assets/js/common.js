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

function clearInputTypeFile(nonEmptyInput) {
  var actualInput = nonEmptyInput.find('input[type="file"]'),
      fileNameField = nonEmptyInput.find('.input_file__filename');
  fileNameField.text('');
  actualInput.val('');
}

$(document).ready(function () {
  if ($('.accord_inner .accord-item__head').length > 0) {
    $('.accord_inner .accord-item__head').each(function () {
      $(this).on('click', function () {
        $(this).next('.accord-item__body').slideToggle();
        $(this).toggleClass('accord-item__head_active');
      });
    });
  }
});
$(document).ready(function () {
  $('table').wrap("<div class='table-container'></div>");
  $('.input_phone').mask('+7 (999) 999-99-99');
  $('.datepicker-here').datepicker({
    language: 'ru',
    minDate: new Date()
  });
  $('.select-item_general').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity
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

  if ($('#contacts-map').length > 0) {
    var init = function init() {
      var map = new ymaps.Map('contacts-map', {
        center: [53.388919, 83.74414],
        zoom: 17,
        controls: ['zoomControl']
      }),
          contactsPlacemark = new ymaps.Placemark(map.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        iconLayout: 'default#image',
        // iconImageHref: 'img/geo.png',
        iconImageSize: [45, 50],
        iconImageOffset: [-22.5, -50]
      });
      map.geoObjects.add(contactsPlacemark);
      map.behaviors.disable('scrollZoom');
    };

    ymaps.ready(init);
  }
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
  if ($('.faq-list .faq-list__switch').length > 0) {
    $('.faq-list .faq-list__switch').each(function () {
      $(this).on('click', function () {
        $(this).toggleClass('faq-list__switch_show').closest('.faq-list__item').find('.faq-list__answer-block').slideToggle();
      });
    });
  }
});
$(document).ready(function () {
  $(document).on('click', '.input-with-label input[type="checkbox"]', function () {
    var state = $(this).prop('checked');

    if (state === true) {
      $(this).closest('.input-with-label').find('.input_file').addClass('disabled');
      $(this).closest('.input-with-label').find('input[type="file"]').removeClass('required');
    } else if (state === false) {
      $(this).closest('.input-with-label').find('.input_file').removeClass('disabled');
      $(this).closest('.input-with-label').find('input[type="file"]').addClass('required');
    }
  }).on('change', "input[type='file']", function () {
    if (!$(this)[0].files[0]) {
      return;
    }

    var file = $(this)[0].files[0],
        fileSize = (file.size / 1000000).toPrecision(2),
        fileNameField = $(this).closest('.input_file').find('.input_file__filename'),
        inputStructureCont = $(this).closest('.input-with-label'),
        actualInputCont = $(this).closest('.input_file');

    if (fileSize <= 20) {
      fileNameField.text(file.name);

      if (inputStructureCont.data().addInputFileOnEnd) {
        var emptyInput = actualInputCont.clone();
        clearInputTypeFile(emptyInput);
        inputStructureCont.append(emptyInput);
        actualInputCont.addClass('input_file-with-file');
      }
    } else {
      fileNameField.text($(this).data().fileIsTooBigMessage);
    }
  }).on('click', '.input_file .input_file__btn_delete', function (e) {
    $(this).closest('.input_file').remove();
    e.preventDefault();
  });
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
$(document).ready(function () {
  var elWithClammpSizes = {
    '.std-grid__item .std-grid__title': 3
  };
  setClamps(elWithClammpSizes);
});
//# sourceMappingURL=common.js.map
