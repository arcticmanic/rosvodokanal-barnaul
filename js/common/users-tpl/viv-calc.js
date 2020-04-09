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

  if ($('#viv-calc').length > 0) {
    const allInputsInsideForm = $('#viv-calc').find(
      "input:not([type='submit']).required, textarea.required, select"
    )

    const allSelects = $('#viv-calc').find('select')

    validateInputs(allInputsInsideForm)

    validateSelects(allSelects)

    $('#viv-calc').on('submit', function (e) {
      let invalidInputsCounter = 0

      allInputsInsideForm.each(function () {
        if ($(this).is('input:not([type="checkbox"])')) {
          if (isInputValid($(this))) {
            $(this).attr('data-valid', true)
          } else {
            $(this).attr('data-valid', false)
            invalidInputsCounter++
          }
        } else if ($(this).is('input[type="checkbox"]')) {
          if (isCheckBoxChecked($(this))) {
            $(this).attr('data-valid', true)
          } else {
            $(this).attr('data-valid', false)
            invalidInputsCounter++
          }
        } else if ($(this).is('select')) {
          if (isSelectValid($(this))) {
            $(this).attr('data-valid', true)
          } else {
            $(this).attr('data-valid', false)
            invalidInputsCounter++
          }
        }
      })

      if (invalidInputsCounter > 0) {
        e.preventDefault()
      }
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
        if (isInputValid($(this))) {
          setValidityAttr($(this), true)
        } else {
          setValidityAttr($(this), false)
        }
      } else {
        if (isCheckBoxChecked($(this))) {
          setValidityAttr($(this), true)
        } else {
          setValidityAttr($(this), false)
        }
      }
    })
  })
}

const isSelectValid = (select) => select.select2('data')[0].id !== ''

const isInputValid = (input) => input.val().trim() !== ''

const isCheckBoxChecked = (checkboxInput) => checkboxInput.prop('checked')

const setValidityAttr = (input, bool) => input.attr('data-valid', bool)
