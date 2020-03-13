$(document).ready(function() {
  const eyeVersion = (function() {
    var $container = $('html')

    return {
      init: function() {
        $('.eye-version').on('click', function() {
          $('.eye-version-panel').slideToggle()
          $('.eye-version').toggleClass('eye-version-active')
          var set = !$container.hasClass('eye-version-active')
          if (set) {
            $container
              .removeClass('eye-version-std')
              .addClass('eye-version-active')
              .addClass(
                'color-' + $('.eye-version__color.m--current').data('color')
              )
            $('.header__eye-version_panel').slideDown(300)
          } else {
            $container
              .removeClass('eye-version-active')
              .removeClass('scale scale-1 scale-2 scale-3')
              .removeClass('color-white color-black')
              .addClass('eye-version-std')
            $('.header__eye-version_panel').slideUp(300)
            $('.eye-version__scale.m--current').removeClass('m--current')
          }
          eyeVersion.save('set', set)
        })

        $('.eye-version__scale').on('click', function(e) {
          e.preventDefault()
          var $this = $(this)
          if (
            $container.hasClass('eye-version-active') &&
            !$this.hasClass('m--current')
          ) {
            $('.eye-version__scale').removeClass('m--current')
            $this.addClass('m--current')
            $container
              .removeClass('scale-1 scale-2 scale-3')
              .addClass('scale-' + $this.data('scale'))
              .addClass('scale')
            eyeVersion.save('scale', $this.data('scale'))
          } else if (
            $container.hasClass('eye-version-active') &&
            $this.hasClass('m--current')
          ) {
            $this.removeClass('m--current')
            $container.removeClass('scale scale-1 scale-2 scale-3')
          }
        })

        $('.eye-version__color').on('click', function(e) {
          e.preventDefault()
          if ($container.hasClass('eye-version-active')) {
            var $this = $(this)
            $('.eye-version__color').removeClass('m--current')
            $this.addClass('m--current')
            $container
              .removeClass('color-white color-black')
              .addClass('color-' + $this.data('color'))
            eyeVersion.save('color', $this.data('color'))
          }
        })

        $('.eye-version-item_back').on('click', function(e) {
          $('.eye-version-active').removeClass('eye-version-active')
          $('.eye-version').addClass('eye-version-std')
          $('.eye-version__scale.m--current').removeClass('m--current')
          $('.eye-version-panel').slideToggle()
          e.preventDefault()
          $container
            .removeClass('eye-version')
            .removeClass('scale scale-1 scale-2 scale-3')
            .removeClass('color-white color-black')
          $('.header__eye-version_panel').slideUp(300)
          eyeVersion.save('set', false)
        })

        $('.eye-version, .eye-version__scale, .eye-version-item_back').on(
          'click',
          function() {
            adjustElSize()
          }
        )
      },
      save: function(type, value) {
        console.log(type, value)
      }
    }
  })()
  eyeVersion.init()
})
