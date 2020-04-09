$(document).ready(function () {
  $('table').wrap("<div class='table-container'></div>")

  $('.input_phone').mask('+7 (000) 000-00-00')

  $('.datepicker-here').datepicker({
    language: 'ru',
    minDate: new Date(),
    onSelect: function (formattedDate, date, inst) {
      if (inst.el.classList.contains('required')) {
        inst.el.setAttribute('data-isValid', true)
      }
    },
  })

  $('.select-item_general').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
  })

  $('a.open-modal').click(function (event) {
    $(this).modal({
      fadeDuration: 250,
    })
    return false
  })

  $('.bage .bage__overlay').ClipPath('0 0, 100% 0, 90% 100%, 0% 100%')
})
