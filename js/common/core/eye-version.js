$(document).ready(function () {
  setTimeout(function () {
    if (eyeVersionScale || eyeVersionColor) {
      $('#eye-version-btn_in-header').trigger('click')
      if (eyeVersionScale) {
        $(`span[data-scale="${eyeVersionScale}"]`).trigger('click')
      }
      if (eyeVersionColor) {
        $(`span[data-color="${eyeVersionColor}"]`).trigger('click')
      }
    }
  }, 0)

  const eyeVersion = (function () {
    const rootElement = $('html'),
      eyeVersionPanel = $('.eye-version-panel')

    return {
      init: function () {
        $('.eye-version-btn').on('click', function () {
          eyeVersionPanel.slideToggle()

          $('.eye-version').toggleClass('eye-version-active')

          let set = !rootElement.hasClass('eye-version-active')

          if (set) {
            rootElement
              .removeClass('eye-version-std')
              .addClass('eye-version-active')
              .addClass(
                'color-' + $('.eye-version__color.m--current').data('color')
              )
            $('.header__eye-version_panel').slideDown(300)

            localStorage.setItem(
              'eyeVersionColor',
              $('.eye-version__color.m--current').data('color')
            )
          } else {
            rootElement
              .removeClass('eye-version-active')
              .removeClass('scale scale-1 scale-2 scale-3')
              .removeClass('color-white color-black')
              .addClass('eye-version-std')

            $('.header__eye-version_panel').slideUp(300)

            $('.eye-version__scale.m--current').removeClass('m--current')

            localStorage.removeItem('eyeVersionColor')

            localStorage.removeItem('eyeVersionScale')
          }
        })

        $('.eye-version__scale').on('click', function (e) {
          var $this = $(this)
          if (
            rootElement.hasClass('eye-version-active') &&
            !$this.hasClass('m--current')
          ) {
            $('.eye-version__scale').removeClass('m--current')
            $this.addClass('m--current')
            rootElement
              .removeClass('scale-1 scale-2 scale-3')
              .addClass('scale-' + $this.data('scale'))
              .addClass('scale')

            localStorage.setItem('eyeVersionScale', $this.data('scale'))
          } else if (
            rootElement.hasClass('eye-version-active') &&
            $this.hasClass('m--current')
          ) {
            $this.removeClass('m--current')
            rootElement.removeClass('scale scale-1 scale-2 scale-3')
            localStorage.removeItem('eyeVersionScale')
          }
        })

        $('.eye-version__color').on('click', function (e) {
          if (rootElement.hasClass('eye-version-active')) {
            var $this = $(this)

            $('.eye-version__color').removeClass('m--current')

            $this.addClass('m--current')

            rootElement
              .removeClass('color-white color-black')
              .addClass('color-' + $this.data('color'))

            localStorage.setItem('eyeVersionColor', $this.data('color'))
          }
        })

        $('.eye-version-item_back').on('click', function (e) {
          $('.eye-version-active').removeClass('eye-version-active')

          $('.eye-version__scale.m--current').removeClass('m--current')

          eyeVersionPanel.slideToggle()

          rootElement
            .removeClass('eye-version')
            .removeClass('scale scale-1 scale-2 scale-3')
            .removeClass('color-white color-black')

          $('.header__eye-version_panel').slideUp(300)

          localStorage.removeItem('eyeVersionColor')

          localStorage.removeItem('eyeVersionScale')
        })

        $('.eye-version, .eye-version__scale, .eye-version-item_back').on(
          'click',
          function () {
            adjustElSize()
          }
        )
      },
      save: function (type, value) {
        console.log(type, value)
      },
    }
  })()
  eyeVersion.init()
})
