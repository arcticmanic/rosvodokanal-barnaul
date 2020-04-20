$(document).ready(function () {
  $(document).on('click', '#accept-cookies-accept-btn', function (e) {
    $(this)
      .closest('.accept-cookies:not(.accept-cookies_always-hidden)')
      .fadeOut()
    e.preventDefault()
  })

  $('.accept-cookies:not(.accept-cookies_always-hidden)').fadeIn()
})
