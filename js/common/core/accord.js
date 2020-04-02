$(document).ready(function() {
  if ($('.accord_inner .accord-item__head').length > 0) {
    $('.accord_inner .accord-item__head').each(function() {
      $(this).on('click', function() {
        $(this)
          .next('.accord-item__body')
          .slideToggle()
        $(this).toggleClass('accord-item__head_active')
      })
    })
  }
})
