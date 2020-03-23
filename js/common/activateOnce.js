$(document).ready(function() {
  $('table').wrap("<div class='table-container'></div>")

  $('select').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity
  })

  $('.phone').mask('99999999999')
})
