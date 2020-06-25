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
        const submitter = e.originalEvent.submitter

        if (submitter) {
          const selectedValidation = submitter.getAttribute(
            'data-selected-validation'
          )

          let invalidInputsCounter = 0
          debugger

          if (!selectedValidation) {
            allInputsInsideForm = $(this).find(
              "input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required"
            )

            allInputsInsideForm.each(function () {
              if (!resolveSingleInputValidity($(this), invalidInputsCounter)) {
                invalidInputsCounter++
              }
            })
          } else if (selectedValidation) {
            allInputsInsideForm = $(this).find(
              "input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required"
            )

            allInputsInsideForm.each(function () {
              resetValidity($(this))
            })

            const inputsToValidateNames = selectedValidation.split(',')

            inputsToValidateNames?.forEach(inputName => {
              if (
                !resolveSingleInputValidity(
                  $(this).find(`[name=${inputName.trim()}]`),
                  invalidInputsCounter
                )
              ) {
                invalidInputsCounter++
              }
            })

            if (
              !resolveSingleInputValidity(
                $(this).find(`input[type='checkbox'].required`),
                invalidInputsCounter
              )
            ) {
              invalidInputsCounter++
            }
          }

          if (invalidInputsCounter > 0) {
            e.preventDefault()
          }
        }
      })
    })
  }
})

window.validateForm = form => {
  let allInputsInsideForm = $(this).find(
    "input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required"
  )

  const allSelects = $(this).find('select')

  const allFileInputs = $(this).find('input[type="file"]')

  validateInputs(allInputsInsideForm)

  validateSelects(allSelects)

  validateFileInputs(allFileInputs)

  form.on('submit', function (e) {
    const submitter = e.originalEvent.submitter

    if (submitter) {
      const selectedValidation = submitter.getAttribute(
        'data-selected-validation'
      )

      let invalidInputsCounter = 0
      debugger

      if (!selectedValidation) {
        allInputsInsideForm = $(this).find(
          "input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required, input[type='checkbox'].required"
        )

        allInputsInsideForm.each(function () {
          if (!resolveSingleInputValidity($(this), invalidInputsCounter)) {
            invalidInputsCounter++
          }
        })
      } else if (selectedValidation) {
        allInputsInsideForm = $(this).find(
          "input[type='text'].required, input[type='number'].required, textarea.required, select.required, input[type='file'].required"
        )

        allInputsInsideForm.each(function () {
          resetValidity($(this))
        })

        const inputsToValidateNames = selectedValidation.split(',')

        inputsToValidateNames?.forEach(inputName => {
          if (
            !resolveSingleInputValidity(
              $(this).find(`[name=${inputName.trim()}]`),
              invalidInputsCounter
            )
          ) {
            invalidInputsCounter++
          }
        })

        if (
          !resolveSingleInputValidity(
            $(this).find(`input[type='checkbox'].required`),
            invalidInputsCounter
          )
        ) {
          invalidInputsCounter++
        }
      }

      if (invalidInputsCounter > 0) {
        e.preventDefault()
      }
    }
  })
}
