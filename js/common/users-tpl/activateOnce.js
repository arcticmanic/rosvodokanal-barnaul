$(document).ready(function () {
  $('#service-category').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите категорию услуг',
  })

  $('#service-type').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите вид услуги',
  })

  $('#city-district').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите район вашего проживания',
  })

  $('#time').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    containerCssClass: 'select2_grey',
    placeholder: '',
  })

  // $('#street').select2({
  //   language: 'ru',
  //   minimumResultsForSearch: Infinity,
  //   containerCssClass: 'select2_white',
  //   placeholder: '',
  // })
})
