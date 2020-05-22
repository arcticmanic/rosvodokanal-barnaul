$(document).ready(function () {
  $('table').wrap("<div class='table-container'></div>")

  $('.input_phone').mask('+7 (000) 000-00-00')

  $('.datepicker-here').datepicker({
    language: 'ru',
    minDate: new Date(),
    onRenderCell: function (date, cellType) {
      if (cellType == 'day') {
        var day = date.getDay(),
          isDisabled = [0, 6].indexOf(day) != -1

        return {
          disabled: isDisabled,
        }
      }
    },
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

  $("a[rel='modal:open']").click(function (event) {
    $(this).modal({
      fadeDuration: 250,
    })
    return false
  })
})
