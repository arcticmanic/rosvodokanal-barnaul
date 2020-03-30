$(document).ready(function() {
  $('table').wrap("<div class='table-container'></div>")

  $('.input_phone').mask('+7 (999) 999-99-99')

  $('.datepicker-here').datepicker({
    language: 'ru',
    minDate: new Date()
  })

  $('.select-item_general').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity
  })

  $('a.open-modal').click(function(event) {
    $(this).modal({
      fadeDuration: 250
    })
    return false
  })
})
