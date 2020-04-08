$(document).ready(function() {
  const jumbotronSlider = $('.jumbotron__slider')

  jumbotronSlider.on('init reInit', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    jumbotronSlider.find('.slick-dots li button').each(function(index) {
      if (index < 9) {
        $(this).text('0' + $(this).html())
      } else {
        $(this).text($(this).html())
      }
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

    if (jumobtronSlide.hasClass('jumbotron-slide_poor-visible-telegram')) {
      $('.section-jumbotron .chat-bots .icon-telegram-chat-svg').addClass(
        'icon-telegram-chat-svg_dark'
      )
    } else {
      $('.section-jumbotron .chat-bots .icon-telegram-chat-svg').removeClass(
        'icon-telegram-chat-svg_dark'
      )
    }
  })

  jumbotronSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    verticalSwiping: true,
    pauseOnHover: true,
    dots: true,
    adaptiveHeight: false,
    vertical: true,
    lazyLoad: 'ondemand'
  })

  $('.jumbotron__slider-left', '.jumbotron__nav').click(function(e) {
    e.preventDefault()
    jumbotronSlider.slick('slickPrev')
  })

  $('.jumbotron__slider-right', '.jumbotron__nav').click(function(e) {
    e.preventDefault()
    jumbotronSlider.slick('slickNext')
  })
})
