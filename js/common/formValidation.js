$(document).ready(function(e) {
  const getSelect2Id = selectId => $(selectId).select2('data')[0].id
  // const addErrorOnInvalidInput = (invalidInputs) => {
  //   for (const invalidInput of invalidInputs) {

  //   }
  // }
  $('form.validate').on('submit', function(e) {
    console.log(!!getSelect2Id('#work-type'), !!getSelect2Id('#city-district'))
  })
})
