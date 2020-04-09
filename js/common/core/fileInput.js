$(document).ready(function () {
  $(document)
    .on('click', '.input-with-label input[type="checkbox"]', function () {
      let state = $(this).prop('checked')
      if (state === true) {
        $(this)
          .closest('.input-with-label')
          .find('.input_file')
          .addClass('disabled')
        $(this)
          .closest('.input-with-label')
          .find('input[type="file"]')
          .removeClass('required')
      } else if (state === false) {
        $(this)
          .closest('.input-with-label')
          .find('.input_file')
          .removeClass('disabled')
        $(this)
          .closest('.input-with-label')
          .find('input[type="file"]')
          .addClass('required')
      }
    })
    .on('change', "input[type='file']", function () {
      if (!$(this)[0].files[0]) {
        return
      } else {
        const file = $(this)[0].files[0],
          fileSize = (file.size / 1000000).toPrecision(2),
          fileNameField = $(this)
            .closest('.input_file')
            .find('.input_file__filename'),
          inputStructureCont = $(this).closest('.input-with-label'),
          actualInputCont = $(this).closest('.input_file')

        const allowedFileSize = $(this).attr('data-max-file-size')

        if (allowedFileSize && fileSize > allowedFileSize) {
          fileNameField.text($(this).data().fileIsTooBigMessage)
          return
        } 
        fileNameField.text(file.name)
        setValidityAttr($(this), true)
        if (inputStructureCont.data().addInputFileOnEnd) {
          const emptyInput = actualInputCont.clone()
          clearInputTypeFile(emptyInput)
          inputStructureCont.append(emptyInput)
          actualInputCont.addClass('input_file-with-file')
        }
      }
    })
    .on('click', '.input_file .input_file__btn_delete', function (e) {
      $(this).closest('.input_file').remove()
      e.preventDefault()
    })
})
