$(document).ready(function () {
  $('#diameter-1').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    containerCssClass: 'select2_grey',
    placeholder: '— выбрать',
  })
  $('#diameter-2').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    containerCssClass: 'select2_grey',
    placeholder: '— выбрать',
  })

  const vivCalc = {
    plannedLoad: 10,
    diameter: 10,
    spread: 10,
  }
})
