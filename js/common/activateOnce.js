$(document).ready(function() {
  $('table').wrap("<div class='table-container'></div>")

  $('select').selectric()

  $('.phone').mask('99999999999')
})
