$(document).ready(function () {
  $(document).on('click', '#accept-cookies-accept-btn', function (e) {
    $(this)
      .closest('.accept-cookies:not(.accept-cookies_always-hidden)')
      .fadeOut()
    if ($('.material-scrolltop').length > 0) {
      $('.material-scrolltop').addClass('accept-block-dismissed')
    }
    e.preventDefault()
  })

  $('.accept-cookies:not(.accept-cookies_always-hidden)').fadeIn()
})
