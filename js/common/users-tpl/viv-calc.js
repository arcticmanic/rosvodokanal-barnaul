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
      "input[type='text'].required, input[type='number'].required, select"
    )

    const allSelects = $('#viv-calc').find('select')

    validateInputs(allInputsInsideForm)

    validateSelects(allSelects)

    $('#viv-calc').on('submit', function (e) {
      let invalidInputsCounter = 0
      console.log(allInputsInsideForm)

      allInputsInsideForm.each(function () {
        if ($(this).is('input')) {
          if (isInputValid($(this))) {
            $(this).attr('data-valid', true)
            invalidInputsCounter++
          } else {
            $(this).attr('data-valid', false)
          }
        } else if ($(this).is('select')) {
          if (isSelectValid($(this))) {
            $(this).attr('data-valid', true)
            invalidInputsCounter++
          } else {
            $(this).attr('data-valid', false)
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
        $(this).attr('data-valid', true)
      } else if (!isSelectValid($(this))) {
        $(this).attr('data-valid', false)
      }
    })
  })
}

const validateInputs = (allInputs) => {
  allInputs.each(function () {
    $(this).on('input', function () {
      if ($(this).val() !== '') {
        $(this).attr('data-valid', true)
      } else if ($(this).val() === '') {
        $(this).attr('data-valid', false)
      }
    })
  })
}

const isSelectValid = (select) => {
  if (select.select2('data')[0].id !== '') {
    return true
  } else {
    return false
  }
}

const isInputValid = (input) => {
  if (input.trim().val() !== '') {
    return true
  } else {
    return false
  }
}
