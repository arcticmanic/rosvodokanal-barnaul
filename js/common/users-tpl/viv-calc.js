$(document).ready(function () {
  $('#waterIn-diameter').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    containerCssClass: 'select2_grey',
    placeholder: '— выбрать',
  })
  $('#waterOut-diameter').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
    containerCssClass: 'select2_grey',
    placeholder: '— выбрать',
  })

  const vivCalcDiameterOption = {
    waterIn: {
      option1: 1767.74,
      option2: 1767.74,
      option3: 2054.45,
      option4: 2420.16,
      option5: 2787.35,
    },
    waterOut: {
      option1: 3078.34,
      option2: 3078.34,
      option3: 3078.34,
      option4: 3108.43,
      option5: 3108.43,
    },
  }

  const form = $('#viv-calc-submit-btn').closest('form'),
    waterInCheckbox = form.find('#waterIn-checkbox'),
    waterOutCheckbox = form.find('#waterIn-checkbox'),
    bothCheckboxes = form.find('#waterIn-checkbox, #waterOut-checkbox'),
    waterInInputs = form.find('.viv-calc__left input'),
    waterInSelect = form.find('.viv-calc__left select'),
    waterOutInputs = form.find('.viv-calc__right input'),
    waterOutSelect = form.find('.viv-calc__right select')

  bothCheckboxes.each(function () {
    $(this).on('click', function () {
      const allInputs = $(this).closest('.viv-calc__block').find('input')
      const selectEl = $(this).closest('.viv-calc__block').find('select')
      if ($(this).prop('checked') === true) {
        selectEl.addClass('required')
        allInputs.each(function () {
          $(this).addClass('required')
        })
      } else {
        selectEl.removeClass('required')
        allInputs.each(function () {
          $(this).removeClass('required')
        })
      }
    })
  })

  $('#viv-calc-submit-btn').on('click', function (event) {
    if (
      waterInCheckbox.prop('checked') === false &&
      waterOutCheckbox.prop('checked') === false
    ) {
      $('.viv-calc__checkbox-prepend-text').addClass('blink-text')
      setTimeout(function () {
        $('.viv-calc__checkbox-prepend-text').removeClass('blink-text')
      }, 2000)
    } else {
      $(this).modal()
      return false
    }

    if (waterInCheckbox.prop('checked')) {
      const load = form.find('#waterIn-load'),
        length = form.find('#waterIn-length'),
        diameter = form.find('#waterIn-diameter')
      allInputs = form.find

      allInputs.each(function () {})

      // if () {

      // } else {
      //   $('#modal_viv-calc #waterIn-results-block').addClass('block')
      //   $('#modal_viv-calc #waterIn-results-block .modal_viv-calc__result').text(
      //     getPriceConnection(
      //       getInputVal(load),
      //       11350,
      //       getInputVal(length),
      //       vivCalcDiameterOption.waterIn[getSelectVal(diameter)]
      //     )
      //   )
      // }
    }

    if (form.find('#waterOut-checkbox').prop('checked')) {
      const load = form.find('#waterOut-load'),
        length = form.find('#waterOut-length'),
        diameter = form.find('#waterOut-diameter')

      $('#modal_viv-calc #waterOut-results-block').addClass('block')
      $('#modal_viv-calc #waterOut-results-block .modal_viv-calc__result').text(
        getPriceConnection(
          getInputVal(load),
          20680,
          getInputVal(length),
          vivCalcDiameterOption.waterIn[getSelectVal(diameter)]
        )
      )
    }
  })
})

const getPriceConnection = (load, loadRate, length, lengthRate) =>
  load * loadRate + length * lengthRate

const getSelectVal = (select) => select.select2('data')[0].id

const getInputVal = (input) => input.val()
