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

const validateSelects = (selects) => {
  selects.each(function () {
    $(this).on('select2:select', function () {
      if (isSelectValid($(this))) {
        setValidityAttr($(this), true)
      } else {
        setValidityAttr($(this), false)
      }
    })
  })
}

const validateInputs = (allInputs) => {
  allInputs.each(function () {
    $(this).on('input', function () {
      if ($(this).is('input:not([type="checkbox"]')) {
        console.log('input')
        if (isInputValid($(this))) {
          setValidityAttr($(this), true)
        } else {
          setValidityAttr($(this), false)
        }
      } else if ($(this).is('input[type="checkbox"]')) {
        if (isCheckBoxChecked($(this))) {
          setValidityAttr($(this), true)
        } else {
          setValidityAttr($(this), false)
        }
      } else  if ($(this).is('textarea')) {
        if (isTextareaValid($(this))) {
          setValidityAttr($(this), true)
        } else {
          setValidityAttr($(this), false)
        }
      }
    })
  })
}

const validateFileInputs = (allFileInputs) => {
  allFileInputs.each(function () {
    $(this).on('change', function () {
      if ($(this)[0].files[0]) {
        setValidityAttr($(this), true)
      } else {
        setValidityAttr($(this), false)
      }
    })
  })
}

const resolveSingleInputValidity = (input) => {
  if (
    input.is('input[type="text"]') ||
    input.is('input[type="number"]') ||
    input.is('textarea')
  ) {
    return setValidityAttrBasedOnCondition(input, isInputValid(input))
  } else if (input.is('input[type="checkbox"]')) {
    return setValidityAttrBasedOnCondition(input, isCheckBoxChecked(input))
  } else if (input.is('input[type="file"]')) {
    return setValidityAttrBasedOnCondition(input, isFileInputValid(input))
  } else if (input.is('select')) {
    return setValidityAttrBasedOnCondition(input, isSelectValid(input))
  }
}

const setValidityAttrBasedOnCondition = (element, condition) => {
  if (condition) {
    setValidityAttr(element, true)
    return true
  } else {
    setValidityAttr(element, false)
    return false
  }
}

const isFileInputValid = (fileInput) => fileInput[0].files[0]

const isSelectValid = (select) => select.select2('data')[0].id !== ''

const isInputValid = (input) => input.val().trim() !== ''

const isTextareaValid = (textarea) => textarea.val().trim() !== ''

const isCheckBoxChecked = (checkboxInput) => checkboxInput.prop('checked')

const setValidityAttr = (input, bool) => input.attr('data-isValid', bool)
