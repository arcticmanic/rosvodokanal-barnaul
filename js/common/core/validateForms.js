$(document).ready(function () {
  const formsToValidate = $('form[data-isValidate="true"]')
  if (formsToValidate.length > 0) {
    formsToValidate.each(function (e) {
      let allInputsInsideForm = $(this).find(
        "input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required"
      )

      const allSelects = $(this).find('select')

      const allFileInputs = $(this).find('input[type="file"]')

      validateInputs(allInputsInsideForm)

      validateSelects(allSelects)

      validateFileInputs(allFileInputs)

      $(this).on('submit', function (e) {
        let invalidInputsCounter = 0

        allInputsInsideForm = $(this).find(
          "input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required"
        )

        allInputsInsideForm.each(function () {
          if (!resolveSingleInputValidity($(this), invalidInputsCounter)) {
            invalidInputsCounter++
          }
        })

        if (invalidInputsCounter > 0) {
          e.preventDefault()
        }
      })
    })
  }
})
