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
