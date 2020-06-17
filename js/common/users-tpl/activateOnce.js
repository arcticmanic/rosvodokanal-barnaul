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

  const select = $('#street')

  select.select2({
    language: 'ru',
    containerCssClass: 'select2_white select2_without-arrow',
    ajax: {
      url: 'https://reqres.in/api/users?page=2',
      dataType: 'json',
      processResults: function (data) {
        return {
          results: $.map(data.data, function (obj) {
            return { id: obj.id, text: obj.email }
          }),
        }
      },
    },
  })

  select.on('select2:select', function (e) {
    $('input[type="hidden"][name="street"]').val(e.params.data.id)
  });

  // После submit'a
  // select.select2({
  //   language: 'ru',
  //   minimumResultsForSearch: Infinity,
  //   containerCssClass: 'select2_white select2_without-arrow',
  // })

  // const inputData = {
  //     id: 1,
  //     name: 'Что-то'
    
  // }

  // var newOption = new Option(inputData.name, inputData.id, false, false)
  // select.append(newOption).trigger('change')
  // select.val(inputData.id).trigger('change')
})

// Для улиц
// processResults: function (data) {
//   return {
//     results: $.map(data, function (obj) {
//       return { id: obj.ID, text: obj.NAME }
//     }),
//   }
// },
// Для домов
// processResults: function (data) {
//   return {
//     results: $.map(data, function (obj) {
//       return { id: obj.POSTALCODE, text: obj.NAME }
//     }),
//   }
// },
// select.on('select2:select', function (e) {
//   $('input[type="hidden"][name="street"]').val(e.params.data.id)
// });
