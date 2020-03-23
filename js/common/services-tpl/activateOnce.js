$(document).ready(function() {
  $('#work-type').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите вид работ'
  })

  $('#city-district').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите район проживания'
  })
})
