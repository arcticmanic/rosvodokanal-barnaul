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

  const vivCalcInfo = {
    waterIn: {
      options: {
        option1: 1767.74,
        option2: 1767.74,
        option3: 2054.45,
        option4: 2420.16,
        option5: 2787.35,
      },
      loadRate: 11350,
    },
    waterOut: {
      options: {
        option1: 3078.34,
        option2: 3078.34,
        option3: 3078.34,
        option4: 3108.43,
        option5: 3108.43,
      },
      loadRate: 20680,
    },
  }

  let form = $('#viv-calc-submit-btn').closest('form'),
    bothCheckboxes = form.find('#waterIn-checkbox, #waterOut-checkbox')

  let waterInCheckbox = form.find('#waterIn-checkbox'),
    waterOutCheckbox = form.find('#waterOut-checkbox')

  bothCheckboxes.each(function () {
    $(this).on('click', function () {
      const allInputs = $(this)
        .closest('.viv-calc__block')
        .find('input:not([type="checkbox"])')

      const selectEl = $(this).closest('.viv-calc__block').find('select')
      if (isCheckBoxChecked($(this))) {
        selectEl.addClass('required')
        allInputs.each(function () {
          $(this).addClass('required')
        })
      } else {
        selectEl.removeClass('required')
        allInputs.each(function () {
          $(this).removeClass('required')
        })
        const prefix = $(this)
          .attr('id')
          .slice(0, $(this).attr('id').indexOf('-'))
        $(`#modal_viv-calc #${prefix}-results-block`).removeClass('block')
      }
    })
  })

  $('#viv-calc-submit-btn').on('click', function (event) {
    const submitBtn = $(this)
    if (
      !isCheckBoxChecked(waterInCheckbox) &&
      !isCheckBoxChecked(waterOutCheckbox)
    ) {
      $('.viv-calc__checkbox-prepend-text').addClass('blink-text')
      setTimeout(function () {
        $('.viv-calc__checkbox-prepend-text').removeClass('blink-text')
      }, 2000)
    } else {
      bothCheckboxes = form.find('#waterIn-checkbox, #waterOut-checkbox')

      let invalidInputsCounter = 1

      bothCheckboxes.each(function () {
        invalidInputsCounter = 0
        if (isCheckBoxChecked($(this))) {
          const block = $(this).closest('.viv-calc__block'),
            inputsInsideBlock = block.find('input.required'),
            selectInsideBlock = block.find('select.required'),
            allInputsInsideBlock = block.find('input.required, select.required')

          validateInputs(inputsInsideBlock)

          validateSelects(selectInsideBlock)

          allInputsInsideBlock.each(function () {
            if (!resolveSingleInputValidity($(this), invalidInputsCounter)) {
              invalidInputsCounter++
            }
          })

          if (invalidInputsCounter === 0) {
            const load = block.find('[data-viv-calc="load"]'),
              length = block.find('[data-viv-calc="length"]'),
              diameter = block.find('[data-viv-calc="diameter"]'),
              prefix = block.attr('id'),
              invokedModalBlocks = $(`#modal_viv-calc #${prefix}-results-block`)

            invokedModalBlocks.each(function () {
              invokedModalBlocks.addClass('block')
              invokedModalBlocks
                .find('.modal_viv-calc__result')
                .text(
                  getPriceConnection(
                    getInputVal(load),
                    vivCalcInfo[prefix].loadRate,
                    getInputVal(length),
                    vivCalcInfo[prefix].options[getSelectVal(diameter)]
                  )
                )
            })
          }
        }
      })

      if (invalidInputsCounter === 0) {
        submitBtn.modal()
        return false
      }
    }
  })
})

const getPriceConnection = (load, loadRate, length, lengthRate) =>
  load * loadRate + length * lengthRate
