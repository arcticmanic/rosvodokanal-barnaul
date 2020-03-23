"use strict";

$(document).ready(function () {
  $('#work-type').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите вид работ'
  });
  $('#city-district').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите район проживания'
  });
});
$(document).ready(function () {
  var elWithClammpSizes = {
    '.services-type__card .card__text': 3
  };
  setClamps(elWithClammpSizes);
});
//# sourceMappingURL=services-tpl.js.map
