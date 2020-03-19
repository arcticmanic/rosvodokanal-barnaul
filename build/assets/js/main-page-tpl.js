"use strict";

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
    // autoplay: true,
    // autoplaySpeed: 4000,
    dots: true,
    adaptiveHeight: false,
    lazyLoad: 'ondemand'
  });
});
$(document).ready(function () {
  var jumbotronSlider = $('.jumbotron__slider');
  jumbotronSlider.on('init reInit', function (event, slick, currentSlide, nextSlide) {
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
    infinite: false,
    // fade: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true,
    pauseOnHover: true,
    dots: true,
    adaptiveHeight: false,
    vertical: true,
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
  var elWithClammpSizes = {
    '.section-info .info-slider__text': 3,
    '.section-news .news__title': 2,
    '.section-quick-menu .quick-menu__p': 4
  };
  setClamps(elWithClammpSizes);
});
//# sourceMappingURL=main-page-tpl.js.map
