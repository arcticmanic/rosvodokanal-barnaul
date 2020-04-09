function setClamps(object) {
  for (const elQuerySel in object) {
    const elsNodeList = document.querySelectorAll(elQuerySel)
    const els = [...elsNodeList]
    if (els.length !== 0) {
      els.forEach(el => {
        $clamp(el, { clamp: object[elQuerySel] })
      })
    }
  }
}

function clearInputTypeFile(nonEmptyInput) {
  const actualInput = nonEmptyInput.find('input[type="file"]'),
    fileNameField = nonEmptyInput.find('.input_file__filename')
  fileNameField.text('')
  actualInput.val('')
}

function triggerEvent(elem, event) {
  const clickEvent = new Event(event)
  elem.dispatchEvent(clickEvent)
}

function clearAllTextInputsAndTextareas(inputs) {
  inputs.each(function() {
    $(this).val('')
  })
}


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