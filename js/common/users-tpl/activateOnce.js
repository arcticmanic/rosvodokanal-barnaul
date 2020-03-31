$(document).ready(function() {
  $('#service-category').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите категорию услуг'
  })

  $('#service-type').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите вид услуги'
  })
})
