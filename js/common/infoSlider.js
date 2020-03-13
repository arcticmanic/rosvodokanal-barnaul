$(document).ready(function() {
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
})
