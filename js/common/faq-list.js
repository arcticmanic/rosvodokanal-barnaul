$(document).ready(function() {
  if ($('.faq-list .faq-list__switch').length > 0) {
    $('.faq-list .faq-list__switch').each(function() {
      $(this).on('click', function() {
        $(this)
          .toggleClass('faq-list__switch_show')
          .closest('.faq-list__item')
          .find('.faq-list__answer-block')
          .slideToggle()
      })
    })
  }
})
