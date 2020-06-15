$(document).ready(function () {
  $('#work-type').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите вид работ',
  })

  $('#city-district').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: '',
  })

  $('#vehicle-type').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
  })

  $('#date-from').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'с',
  })

  $('#date-to').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'до',
  })
})
