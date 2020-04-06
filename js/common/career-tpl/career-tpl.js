$(document).ready(function () {
  $(document)
    .on('modal:before-open', '.modal_job', function (event, modal) {
      const jobTitle = modal.$anchor
        .first()
        .closest('.page-content__title-cont')
        .find('.page-content__title')
        .text()
      modal.$elm.first().find('.form-title').text(jobTitle)
    })
    .on('modal:after-close', '.modal_job', function (event, modal) {
      clearInputTypeFile($('.modal_job .input_file'))
      modal.$elm.first().find('.form-title').text('')
      const allInputsInModal = modal.$elm.first().find('input[type="text"], textarea')
      clearAllTextInputsAndTextareas(allInputsInModal)
    })
})
