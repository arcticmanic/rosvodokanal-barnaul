$(document).ready(function() {
  $('table').wrap("<div class='table-container'></div>")

  $('.input_phone').mask('+7 (999) 999-99-99')

  $('.datepicker-here').datepicker({
    language: 'ru',
    minDate: new Date() // Now can select only dates, which goes after today
  })
})
