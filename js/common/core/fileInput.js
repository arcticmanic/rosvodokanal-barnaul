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
        let file = $(this)[0].files[0],
          fileSize = (file.size / 1000000).toPrecision(2),
          fileNameField = $(this)
            .closest('.input_file')
            .find('.input_file__filename'),
          inputStructureCont = $(this).closest('.input-with-label'),
          actualInputCont = $(this).closest('.input_file')

        if (fileSize <= 20) {
          fileNameField.text(file.name)
          if (inputStructureCont.data().addInputFileOnEnd) {
            const emptyInput = actualInputCont.clone()
            clearInputTypeFile(emptyInput)
            inputStructureCont.append(emptyInput)

            actualInputCont.addClass('input_file-with-file')
          }
        } else {
          fileNameField.text($(this).data().fileIsTooBigMessage)
        }
      }
    })
    .on('click', '.input_file .input_file__btn_delete', function (e) {
      $(this).closest('.input_file').remove()
      e.preventDefault()
    })
})
